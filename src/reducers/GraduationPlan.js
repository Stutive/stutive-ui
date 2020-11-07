import { combineReducers } from 'redux-immutable';
import { Map, List } from 'immutable';

import Semester from '../models/Semester';

import {
  GRADUATION_PLAN_ADD_SEMESTER,
  GRADUATION_PLAN_REMOVE_SEMESTER,
  GRADUATION_PLAN_UPDATE_SEMESTER,
  GRADUATION_PLAN_ADD_COURSE_TO_SEMESTER,
  GRADUATION_PLAN_REMOVE_COURSE_FROM_SEMESTER
} from '../actions/ActionTypes';

function semestersById(state = Map(), action) {
  switch (action.type) {
    case GRADUATION_PLAN_ADD_SEMESTER: {
      const { semesterId, semesterLabel } = action;

      return state.set(semesterId, new Semester(semesterId, semesterLabel));
    }

    case GRADUATION_PLAN_REMOVE_SEMESTER: {
      const { semesterId } = action;

      return state.delete(semesterId);
    }

    case GRADUATION_PLAN_UPDATE_SEMESTER: {
      const { semesterId, field, value } = action;

      return state.setIn([semesterId, field], value);
    }

    case GRADUATION_PLAN_ADD_COURSE_TO_SEMESTER: {
      const { semesterId, courseId } = action;

      return state.updateIn([semesterId, 'courseIds'], courses =>
        courses.push(courseId)
      );
    }

    case GRADUATION_PLAN_REMOVE_COURSE_FROM_SEMESTER: {
      const { semesterId, courseId } = action;

      return state.updateIn([semesterId, 'courseIds'], courses => {
        const courseIdx = courses.indexOf(courseId);
        return courses.delete(courseIdx);
      });
    }

    default: {
      return state;
    }
  }
}

function semestersOrderedIds(state = List(), action) {
  switch (action.type) {
    case GRADUATION_PLAN_ADD_SEMESTER: {
      const { semesterId } = action;

      return state.push(semesterId);
    }

    case GRADUATION_PLAN_REMOVE_SEMESTER: {
      const { semesterId } = action;

      const semesterIdx = state.indexOf(semesterId);
      return state.delete(semesterIdx);
    }

    // TODO: implement GRADUATION_PLAN_REORDER_SEMESTERS

    default: {
      return state;
    }
  }
}

export default combineReducers({
  semestersById,
  semestersOrderedIds
});
