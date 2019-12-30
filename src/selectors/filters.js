export function getFilterFields(state) {
  return state.getIn(['filters', 'allFields']);
}

export function getFilter(state) {
  return state.getIn(['filters', 'filter']);
}
