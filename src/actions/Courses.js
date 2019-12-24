import * as CoursesClient from '../api/Courses';

import { normalizeObjectArrayById } from '../lib/normalization/utils';

import { COURSE_FETCH } from './ActionTypes';

export const fetchCourses = queryParams => dispatch => {
  const { __request, __receive, __error } = fetchCourses;
  dispatch(__request());

  CoursesClient.fetch(queryParams).then(
    courses => {
      dispatch(__receive(courses));
    },
    error => {
      dispatch(__error(error));
    }
  );
};

fetchCourses.__request = () => ({
  type: COURSE_FETCH.REQUEST
});

fetchCourses.__receive = courses => {
  const { allIds, objectsById } = normalizeObjectArrayById(courses);

  return {
    type: COURSE_FETCH.RECEIVE,
    allIds,
    coursesById: objectsById
  };
};

fetchCourses.__error = error => ({
  type: COURSE_FETCH.ERROR,
  error
});
