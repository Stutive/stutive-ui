import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as Colors from '../../UIComponents/StyleTokens/colors';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UIIcon from '../../UIComponents/icon/UIIcon';

import { getById } from '../../selectors/courses';
import { getIsCourseInSchedule } from '../../selectors/schedules';
import {
  scheduleAddCourse,
  scheduleRemoveCourse
} from '../../actions/Schedules';

import CoursePreviewCard from '../../components/CoursePreviewCard';
import CourseInsert from '../../components/course/sections/CourseInsert';
import GeneralEducation from '../../components/course/sections/GeneralEducation';

const ScheduleButton = ({ handleAdd, handleRemove, isInSchedule }) => (
  <UIFlex
    className="pt-3"
    justify="center"
    onClick={isInSchedule ? handleRemove : handleAdd}
  >
    <div style={{ height: '100%' }}>
      <UIIcon
        color={isInSchedule ? Colors.CANDY_APPLE : Colors.OZ}
        name={isInSchedule ? 'fas fa-calendar-times' : 'fas fa-calendar-plus'}
        size="small"
      />
    </div>
    <span
      style={{
        paddingLeft: '7px',
        color: isInSchedule ? Colors.CANDY_APPLE : Colors.OZ
      }}
    >
      {isInSchedule ? 'Remove from schedule' : 'Add to Schedule'}
    </span>
  </UIFlex>
);

const CoursePreviewCardContainer = ({
  addCourseFromSchedule,
  removeCourseFromSchedule,
  course,
  isInSchedule
}) => {
  const title = course.get('title');
  const hours = course.get('hours').toJS();
  const description = course.get('description');

  const renderCourseInsert = () => {
    const equivalentCourse = course.get('equivalentCourse');
    if (!equivalentCourse) {
      return null;
    }
    return (
      <CourseInsert title={'some course'} description={'some description'} />
    );
  };

  const renderGeneralEducation = () => {
    const generalEducationRequirements = course.get('genEdAttributes').toJS();
    return <GeneralEducation requirements={generalEducationRequirements} />;
  };

  return (
    <CoursePreviewCard title={title} creditHours={hours} className="mb-2">
      <p>{description}</p>
      {renderCourseInsert()}
      {renderGeneralEducation()}
      <ScheduleButton
        handleAdd={addCourseFromSchedule}
        handleRemove={removeCourseFromSchedule}
        isInSchedule={isInSchedule}
      />
    </CoursePreviewCard>
  );
};

CoursePreviewCardContainer.propTypes = {
  courseId: PropTypes.string.isRequired,
  /*  @connect  */
  course: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const coursesById = getById(state);
  return {
    course: coursesById.get(ownProps.courseId),
    isInSchedule: getIsCourseInSchedule(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCourseFromSchedule: () => {
      dispatch(scheduleAddCourse(ownProps.courseId));
    },
    removeCourseFromSchedule: () => {
      dispatch(scheduleRemoveCourse(ownProps.courseId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePreviewCardContainer);
