import { combineReducers } from 'redux-immutable';

import courses from './Courses';
import filters from './Filters';
import gpaData from './GPAData';
import schedules from './Schedules';

export default combineReducers({
  courses,
  filters,
  gpaData,
  schedules
});
