import { combineReducers } from 'redux-immutable';
import { Map, OrderedSet } from 'immutable';
import { mapValues } from 'lodash';

import { GPA_DATA_FETCH } from '../actions/ActionTypes';

function allIds(state = OrderedSet([]), action) {
  switch (action.type) {
    case GPA_DATA_FETCH.RECEIVE: {
      const { allIds } = action;

      return state.merge(allIds);
    }
    default: {
      return state;
    }
  }
}

function byId(state = Map({}), action) {
  switch (action.type) {
    case GPA_DATA_FETCH.RECEIVE: {
      const { byId } = action;

      const gpaDataByIdImmutable = Map(
        mapValues(byId, gpaData => Map(gpaData))
      );

      return state.merge(gpaDataByIdImmutable);
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  allIds,
  byId
});
