import { createSelector } from 'reselect';

const getAllIds = state => state.courses.allIds;
const getById = state => state.courses.byId;

export const getAllCourses = createSelector(
  [getAllIds, getById],
  (allIds, byId) => {
    if (!allIds || allIds.length === 0) {
      return [];
    }

    return allIds.map(id => byId.get(id));
  }
);
