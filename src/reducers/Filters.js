import { combineReducers } from 'redux';

import { List } from 'immutable';

import { FILTER_OPTIONS_FETCH } from '../actions/ActionTypes';

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

export default combineReducers({
  allFields
});
