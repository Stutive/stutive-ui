export function getSemestersOrderedIds(state) {
  return state.getIn(['graduationPlan', 'semestersOrderedIds']);
}

export function getSemestersById(state) {
  return state.getIn(['graduationPlan', 'semestersById']);
}

export function getAllSemestersOrdered(state) {
  const semesterIds = getSemestersOrderedIds(state);
  const semestersById = getSemestersById(state);

  return semesterIds.map(id => semestersById.get(id));
}
