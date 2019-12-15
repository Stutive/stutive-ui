import * as FilterOptionsClient from '../api/FilterOptions';

import { FILTER_OPTIONS_FETCH } from './ActionTypes';

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
