import { COURSES_RESPONSE } from '../fixtures/Courses';

export function fetch(queryParams) {
  //  TODO(Alpri): Actually implement this when the api is ready
  return new Promise(resolve => {
    resolve(COURSES_RESPONSE);
  });
}
