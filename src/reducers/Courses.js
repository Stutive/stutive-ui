import { combineReducers } from 'redux';
import { Map, List } from 'immutable';
import { mapValues } from 'lodash';

import Course from '../models/Course';

import { COURSE_FETCH } from '../actions/ActionTypes';

function allIds(state = List([]), action) {
  switch (action.type) {
    case COURSE_FETCH.RECEIVE: {
      const { allIds } = action;
      console.log(allIds);
      const allIdsImmutable = List(allIds);

      return state.merge(allIdsImmutable);
    }
    default: {
      return state;
    }
  }
}

function byId(state = Map({}), action) {
  switch (action.type) {
    case COURSE_FETCH.RECEIVE: {
      const { coursesById } = action;

      const coursesByIdImmutable = Map(
        mapValues(coursesById, course => new Course(course))
      );

      return state.merge(coursesByIdImmutable);
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
