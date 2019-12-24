import * as FilterOptionsClient from '../api/FilterOptions';

import { FILTER_OPTIONS_FETCH, FILTER_UPDATE } from './ActionTypes';

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
