import client from './clients/Client';

const BASE_API_URL = `https://learn-seed.herokuapp.com/learn-seed`;

const DEFAULT_PAGINATION_LIMIT = 20;

export function fetch(queryParams, page = 0) {
  return new Promise((resolve, reject) => {
    client
      .get(`${BASE_API_URL}/course`, {
        params: {
          start: page * DEFAULT_PAGINATION_LIMIT,
          limit: DEFAULT_PAGINATION_LIMIT,
          ...queryParams
        }
      })
      .then(
        res => {
          //  Temporary
          resolve(
            res.data.map(course => ({
              ...course,
              id: course._id.$oid,
              title: `${course.code} ${course.name}`
            }))
          );
        },
        error => {
          reject(new Error(error));
        }
      );
  });
}
