import * as CoursesClient from '../api/Courses';

import { normalizeObjectArrayById } from '../lib/normalization/utils';

import { COURSE_FETCH } from './ActionTypes';

export const requestFetch = () => ({
  type: COURSE_FETCH.REQUEST
});

export const receiveFetch = courses => {
  const { allIds, objectsById } = normalizeObjectArrayById(courses);

  return {
    type: COURSE_FETCH.RECEIVE,
    allIds,
    coursesById: objectsById
  };
};

export const errorFetch = error => ({
  type: COURSE_FETCH.ERROR,
  error
});

export const fetchCourses = () => dispatch => {
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
