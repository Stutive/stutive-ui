import * as FilterOptionsClient from '../api/FilterOptions';

import { FILTER_OPTIONS_FETCH, FILTER_UPDATE } from './ActionTypes';

import { getFilter } from '../selectors/filters';
import { fetchCourses } from '../actions/Courses';

export const fetchFilterOptions = () => dispatch => {
  const { __request, __receive, __error } = fetchFilterOptions;
  dispatch(__request());

  FilterOptionsClient.fetch().then(
    filterOptions => {
      dispatch(__receive(filterOptions));
    },
    error => {
      dispatch(__error(error));
    }
  );
};

fetchFilterOptions.__request = () => ({
  type: FILTER_OPTIONS_FETCH.REQUEST
});

fetchFilterOptions.__receive = filterOptions => ({
  type: FILTER_OPTIONS_FETCH.RECEIVE,
  filterOptions
});

fetchFilterOptions.__error = error => ({
  type: FILTER_OPTIONS_FETCH.ERROR,
  error
});

export const updateFilter = (filter, value) => ({
  type: FILTER_UPDATE,
  filter,
  value
});

export const applyFilter = () => (dispatch, getState) => {
  const state = getState();

  const filters = getFilter(state).toJS();
  dispatch(fetchCourses(filters));
  //  TODO: Finish Implementing this when vibhav is ready with api
  alert(`searching with: ${JSON.stringify(filters)}`);
};
