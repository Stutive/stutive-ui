export function getAllIds(state) {
  return state.getIn(['courses', 'allIds']);
}

export function getById(state) {
  return state.getIn(['courses', 'byId']);
}

export function getIsFetching(state) {
  return state.getIn(['courses', 'isFetching']);
}

export function getIsValid(state) {
  return state.getIn(['courses', 'isValid']);
}

export function getCurrentPage(state) {
  return state.getIn(['courses', 'currentPage']);
}

export function getCoursesWithIds(state, courseIds) {
  return getById(state)
    .toList()
    .filter(course => courseIds.includes(course.get('id')));
}

export function getTotalCreditHoursWithCourseIds(state, courseIds) {
  return getCoursesWithIds(state, courseIds).reduce(
    (acc, course) => acc + course.get('hours').toJS()[0],
    0
  );
  // TODO: handle multiple hours values
}
