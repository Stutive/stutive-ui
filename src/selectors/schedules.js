import { getById } from './courses';

export function getCourses(state) {
  const courseIds = state.getIn(['schedules', 'coursesById']);
  const coursesById = getById(state);
  return courseIds.map(id => coursesById.get(id));
}

/**
 *  Required Props
 *  - courseId
 */
export function getIsCourseInSchedule(state, props) {
  const courseIds = state.getIn(['schedules', 'coursesById']);
  return courseIds.has(props.courseId);
}
