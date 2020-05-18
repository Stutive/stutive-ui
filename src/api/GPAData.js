import axios from 'axios';

const BASE_API_URL = `https://learn-seed.herokuapp.com/learn-seed`;

export function fetchByCourseIds(courseIds) {
  return axios
    .get(`${BASE_API_URL}/gpa/bulk`, {
      params: {
        course_ids: courseIds
      }
    })
    .then(res => res.data);
}
