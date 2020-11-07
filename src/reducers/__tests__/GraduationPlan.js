import { Map } from 'immutable';

import {
  GRADUATION_PLAN_ADD_SEMESTER,
  GRADUATION_PLAN_REMOVE_SEMESTER,
  GRADUATION_PLAN_UPDATE_SEMESTER,
  GRADUATION_PLAN_ADD_COURSE_TO_SEMESTER,
  GRADUATION_PLAN_REMOVE_COURSE_FROM_SEMESTER
} from '../../actions/ActionTypes';
import graduationPlanReducer from '../GraduationPlan';

describe('reducers/GraduationPlan', () => {
  it('should correctly add semester', () => {
    const semesterId = 'semester-1234';
    const semesterLabel = 'Fall 2020';

    const action = {
      type: GRADUATION_PLAN_ADD_SEMESTER,
      semesterId,
      semesterLabel
    };

    const state = graduationPlanReducer(Map(), action);
    const createdSemester = state.toJS().semestersById[semesterId];
    expect(createdSemester).toBeDefined();
    expect(createdSemester.id).toBe(semesterId);
    expect(createdSemester.label).toBe(semesterLabel);
    expect(createdSemester.courseIds).toEqual([]);

    expect(state.get('semestersOrderedIds').includes(semesterId)).toBe(true);
  });

  it('should correctly rename semester', () => {
    const semesterId = 'semester-1234';
    const semesterLabel = 'Fall 2020';

    const addSemesterAction = {
      type: GRADUATION_PLAN_ADD_SEMESTER,
      semesterId,
      semesterLabel
    };

    const renameSemesterAction = {
      type: GRADUATION_PLAN_UPDATE_SEMESTER,
      semesterId,
      field: 'label',
      value: 'some new label'
    };

    const stateAfterAdd = graduationPlanReducer(Map(), addSemesterAction);
    const stateAfterRename = graduationPlanReducer(
      stateAfterAdd,
      renameSemesterAction
    );

    const semester = stateAfterRename
      .getIn(['semestersById', semesterId])
      .toJS();
    expect(semester.label).toBe('some new label');

    expect(
      stateAfterRename.get('semestersOrderedIds').includes(semesterId)
    ).toBe(true);
  });

  it('should correctly remove semester', () => {
    const semesterId = 'semester-1234';
    const semesterLabel = 'Fall 2020';

    const addSemesterAction = {
      type: GRADUATION_PLAN_ADD_SEMESTER,
      semesterId,
      semesterLabel
    };

    const removeSemesterAction = {
      type: GRADUATION_PLAN_REMOVE_SEMESTER,
      semesterId
    };

    const stateAfterAdd = graduationPlanReducer(Map(), addSemesterAction);
    const stateAfterRemove = graduationPlanReducer(
      stateAfterAdd,
      removeSemesterAction
    );

    expect(
      stateAfterRemove.getIn(['semestersById', semesterId])
    ).toBeUndefined();

    expect(
      stateAfterRemove.get('semestersOrderedIds').includes(semesterId)
    ).toBe(false);
  });

  it('should correctly add and remove course from semester', () => {
    const semesterId = 'semester-1234';
    const semesterLabel = 'Fall 2020';
    const courseId = 'course-1234';

    const addSemesterAction = {
      type: GRADUATION_PLAN_ADD_SEMESTER,
      semesterId,
      semesterLabel
    };

    const addCourseAction = {
      type: GRADUATION_PLAN_ADD_COURSE_TO_SEMESTER,
      semesterId,
      courseId
    };

    const removeCourseAction = {
      type: GRADUATION_PLAN_REMOVE_COURSE_FROM_SEMESTER,
      semesterId,
      courseId
    };

    const stateAfterAdd = graduationPlanReducer(Map(), addSemesterAction);
    const stateAfterAddCourse = graduationPlanReducer(
      stateAfterAdd,
      addCourseAction
    );

    expect(
      stateAfterAddCourse
        .getIn(['semestersById', semesterId, 'courseIds'])
        .includes(courseId)
    ).toBe(true);
    expect(
      stateAfterAddCourse
        .getIn(['semestersById', semesterId, 'courseIds'])
        .count()
    ).toBe(1);

    const stateAfterRemoveCourse = graduationPlanReducer(
      stateAfterAddCourse,
      removeCourseAction
    );

    expect(
      stateAfterRemoveCourse
        .getIn(['semestersById', semesterId, 'courseIds'])
        .includes(courseId)
    ).toBe(false);
  });
});
