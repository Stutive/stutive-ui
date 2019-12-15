import { combineReducers } from 'redux';

import courses from './Courses';
import filters from './Filters';

export default combineReducers({
  courses,
  filters
});
