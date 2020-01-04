import * as CoursesClient from '../api/Courses';

import { normalizeObjectArrayById } from '../lib/normalization/utils';

import { COURSE_FETCH } from './ActionTypes';
import { getCurrentPage, getIsValid } from '../selectors/courses';
import { getFilter } from '../selectors/filters';

export const fetchCourses = () => (dispatch, getState) => {
  const { __request, __receive, __error } = fetchCourses;
  dispatch(__request());

  const state = getState();
  const currentPage = getCurrentPage(state);
  const queryParams = getFilter(state).toJS();
  const isValid = getIsValid(state);

  const pageToFetch = isValid ? currentPage + 1 : 0;

  CoursesClient.fetch(queryParams, pageToFetch).then(
    courses => {
      dispatch(__receive(courses, pageToFetch));
    },
    error => {
      dispatch(__error(error));
    }
  );
};

fetchCourses.__request = () => ({
  type: COURSE_FETCH.REQUEST
});

fetchCourses.__receive = (courses, page) => {
  const { allIds, objectsById } = normalizeObjectArrayById(courses);

  return {
    type: COURSE_FETCH.RECEIVE,
    allIds,
    coursesById: objectsById,
    page
  };
};

fetchCourses.__error = error => ({
  type: COURSE_FETCH.ERROR,
  error
});
