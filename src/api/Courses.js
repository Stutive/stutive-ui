import client from 'axios';

const BASE_API_URL = `https://learn-seed.herokuapp.com/learn-seed`;

export function fetch(queryParams) {
  //  TODO(Alpri): Actually implement this when the api is ready
  return new Promise((resolve, reject) => {
    client
      .get(`${BASE_API_URL}/course`, {
        params: {
          start: 0,
          limit: 100
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
