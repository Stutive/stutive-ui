import { SCHEDULE_ADD_COURSE, SCHEDULE_REMOVE_COURSE } from './ActionTypes';

export const scheduleAddCourse = courseId => ({
  type: SCHEDULE_ADD_COURSE,
  courseId
});

export const scheduleRemoveCourse = courseId => ({
  type: SCHEDULE_REMOVE_COURSE,
  courseId
});
