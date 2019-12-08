import { combineReducers } from 'redux';
import { Map } from 'immutable';
import { mapValues } from 'lodash';

import { getObjectByIdFromObjectArray } from '../lib/normalization/utils';

import Course from '../models/Course';

import { COURSE_FETCH } from '../actions/ActionTypes';

function byId(state = new Map(), action) {
  switch (action.type) {
    case COURSE_FETCH.RECEIVE: {
      const { courses } = action;

      const coursesById = getObjectByIdFromObjectArray(courses);

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
  byId
});
