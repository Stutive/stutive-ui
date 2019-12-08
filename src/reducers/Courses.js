import { combineReducers } from 'redux';
import { Map } from 'immutable';

import Course from '../models/Course';
import { COURSE_FETCH } from '../actions/ActionTypes';

function byId(state = new Map(), action) {
  switch (action.type) {
    case COURSE_FETCH.RECEIVE: {
      const { courses } = action;

      const coursesById = courses.reduce((byId, course) => {
        return {
          ...byId,
          [course.id]: new Course(course)
        };
      }, {});

      return state.merge(Map(coursesById));
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  byId
});
