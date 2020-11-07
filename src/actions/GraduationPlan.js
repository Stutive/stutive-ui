import {
  GRADUATION_PLAN_ADD_SEMESTER,
  GRADUATION_PLAN_REMOVE_SEMESTER,
  GRADUATION_PLAN_UPDATE_SEMESTER,
  GRADUATION_PLAN_ADD_COURSE_TO_SEMESTER,
  GRADUATION_PLAN_REMOVE_COURSE_FROM_SEMESTER
} from '../actions/ActionTypes';

export const addSemester = (semesterId, semesterLabel) => ({
  type: GRADUATION_PLAN_ADD_SEMESTER,
  semesterId,
  semesterLabel
});

export const updateSemester = (semesterId, field, value) => ({
  type: GRADUATION_PLAN_UPDATE_SEMESTER,
  semesterId,
  field,
  value
});

export const removeSemester = semesterId => ({
  type: GRADUATION_PLAN_REMOVE_SEMESTER,
  semesterId
});

export const addCourseToSemester = (semesterId, courseId) => ({
  type: GRADUATION_PLAN_ADD_COURSE_TO_SEMESTER,
  semesterId,
  courseId
});

export const removeCourseFromSemester = (semesterId, courseId) => ({
  type: GRADUATION_PLAN_REMOVE_COURSE_FROM_SEMESTER,
  semesterId,
  courseId
});
