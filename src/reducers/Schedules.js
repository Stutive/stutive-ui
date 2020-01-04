import { combineReducers } from 'redux-immutable';
import { OrderedSet } from 'immutable';

import {
  SCHEDULE_ADD_COURSE,
  SCHEDULE_REMOVE_COURSE
} from '../actions/ActionTypes';

function coursesById(state = OrderedSet([]), action) {
  switch (action.type) {
    case SCHEDULE_ADD_COURSE: {
      return state.add(action.courseId);
    }
    case SCHEDULE_REMOVE_COURSE: {
      return state.delete(action.courseId);
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  coursesById
});
