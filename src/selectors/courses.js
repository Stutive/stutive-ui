export function getAllIds(state) {
  return state.getIn(['courses', 'allIds']);
}

export function getById(state) {
  return state.getIn(['courses', 'byId']);
}

export function getIsValid(state) {
  return state.getIn(['courses', 'isValid']);
}

export function getCurrentPage(state) {
  return state.getIn(['courses', 'currentPage']);
}
