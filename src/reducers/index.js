import { combineReducers } from 'redux-immutable';

import courses from './Courses';
import filters from './Filters';
import schedules from './Schedules';

export default combineReducers({
  courses,
  filters,
  schedules
});
