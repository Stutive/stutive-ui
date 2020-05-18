import { GPA_DATA_FETCH } from './ActionTypes';
import * as GPADataClient from '../api/GPAData';
import { getAllIds, getById } from '../selectors/courses';

export const fetchGPAData = () => (dispatch, getState) => {
  const { __request, __receive, __error } = fetchGPAData;
  dispatch(__request);

  const state = getState();

  const allCourseIds = getAllIds(state).toJS();
  //  TODO: Filter out ids of courses with gpa data already fetched

  const allCourseCodes = [];
  allCourseIds.forEach(course_id => {
    const course_code = getById(state).getIn([course_id, 'code']);
    allCourseCodes.push(course_code);
  });

  GPADataClient.fetchByCourseIds(allCourseCodes).then(
    gpaData => {
      dispatch(__receive(gpaData));
    },
    error => {
      dispatch(__error(error));
    }
  );
};

fetchGPAData.__request = () => ({
  type: GPA_DATA_FETCH.REQUEST
});

fetchGPAData.__receive = gpaData => {
  const allIds = [];
  for (const course_id in gpaData) {
    allIds.push(course_id);
  }

  return {
    type: GPA_DATA_FETCH.RECEIVE,
    allIds,
    byId: gpaData
  };
};

fetchGPAData.__error = error => ({
  type: GPA_DATA_FETCH.ERROR,
  error
});
