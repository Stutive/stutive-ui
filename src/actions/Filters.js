import * as FilterOptionsClient from '../api/FilterOptions';

import { FILTER_OPTIONS_FETCH, FILTER_UPDATE } from './ActionTypes';

/**
 *  @async fetchFilterOptions()
 */
export const requestFetch = () => ({
  type: FILTER_OPTIONS_FETCH.REQUEST
});

export const receiveFetch = filterOptions => {
  return {
    type: FILTER_OPTIONS_FETCH.RECEIVE,
    filterOptions
  };
};

export const errorFetch = error => ({
  type: FILTER_OPTIONS_FETCH.ERROR,
  error
});

export const fetchFilterOptions = () => dispatch => {
  dispatch(requestFetch());

  FilterOptionsClient.fetch().then(
    filterOptions => {
      dispatch(receiveFetch(filterOptions));
    },
    error => {
      dispatch(errorFetch(error));
    }
  );
};

export const updateFilter = (filter, value) => ({
  type: FILTER_UPDATE,
  filter,
  value
});
