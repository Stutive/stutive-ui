import * as CoursesClient from '../api/Courses';

import { COURSE_FETCH } from './ActionTypes';

export const requestFetch = () => ({
  type: COURSE_FETCH.REQUEST
});

export const receiveFetch = courses => ({
  type: COURSE_FETCH.RECEIVE,
  courses
});

export const errorFetch = error => ({
  type: COURSE_FETCH.ERROR,
  error
});

export const fetch = () => dispatch => {
  dispatch(requestFetch());

  CoursesClient.fetch().then(
    courses => {
      dispatch(receiveFetch(courses));
    },
    error => {
      dispatch(errorFetch(error));
    }
  );
};
