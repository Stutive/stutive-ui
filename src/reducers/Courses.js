import { combineReducers } from 'redux-immutable';
import { Map, OrderedSet } from 'immutable';
import { mapValues } from 'lodash';

import Course from '../models/Course';

import { COURSE_FETCH, FILTER_UPDATE } from '../actions/ActionTypes';

function allIds(state = OrderedSet([]), action) {
  switch (action.type) {
    case COURSE_FETCH.RECEIVE: {
      const { allIds } = action;

      return state.merge(allIds);
    }
    case FILTER_UPDATE: {
      return OrderedSet([]);
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

function isFetching(state = false, action) {
  switch (action.type) {
    case COURSE_FETCH.REQUEST: {
      return true;
    }
    case COURSE_FETCH.RECEIVE:
    case COURSE_FETCH.ERROR: {
      return false;
    }
    default: {
      return state;
    }
  }
}
function isValid(state = true, action) {
  switch (action.type) {
    case COURSE_FETCH.RECEIVE: {
      return true;
    }
    case FILTER_UPDATE: {
      return false;
    }
    default: {
      return state;
    }
  }
}

function currentPage(state = 0, action) {
  switch (action.type) {
    case COURSE_FETCH.RECEIVE: {
      const { page } = action;

      return page;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  allIds,
  byId,
  isFetching,
  isValid,
  currentPage
});
