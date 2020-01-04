import { combineReducers } from 'redux-immutable';

import { Map, List } from 'immutable';

import { FILTER_OPTIONS_FETCH, FILTER_UPDATE } from '../actions/ActionTypes';

function allFields(state = List(), action) {
  switch (action.type) {
    case FILTER_OPTIONS_FETCH.RECEIVE: {
      const { filterOptions } = action;
      const allFieldsImmutable = List(filterOptions.fields);

      return state.merge(allFieldsImmutable);
    }
    default: {
      return state;
    }
  }
}

function filter(state = Map(), action) {
  switch (action.type) {
    case FILTER_UPDATE: {
      const { filter, value } = action;
      if (!value) {
        return state.delete(filter);
      }

      if (Array.isArray(value) && value.length === 0) {
        return state.delete(filter);
      }

      return state.set(filter, value);
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  allFields,
  filter
});
