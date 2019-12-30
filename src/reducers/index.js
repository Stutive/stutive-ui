import { combineReducers } from 'redux-immutable';

import courses from './Courses';
import filters from './Filters';

export default combineReducers({
  courses,
  filters
});
