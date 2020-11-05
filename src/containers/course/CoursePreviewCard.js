import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as Colors from '../../UIComponents/StyleTokens/colors';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UIIcon from '../../UIComponents/icon/UIIcon';
import UIGPADistributionVis from '../../UIComponents/visualization/UIGPADistributionVis';

import {
  calculateDistributionIntervalsByCourseId,
  calculateAverageGPAByCourseId
} from '../../selectors/gpaData';
import { getById } from '../../selectors/courses';
import { getIsCourseInSchedule } from '../../selectors/schedules';
import {
  scheduleAddCourse,
  scheduleRemoveCourse
} from '../../actions/Schedules';

import CoursePreviewCard from '../../components/CoursePreviewCard';
import CourseInsert from '../../components/course/sections/CourseInsert';
import GeneralEducation from '../../components/course/sections/GeneralEducation';

const CoursePreviewCardContainer = ({
  addCourseFromSchedule,
  removeCourseFromSchedule,
  course,
  isInSchedule,
  isFocused,
  gpa,
  ...rest
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

  const renderGPAVisualization = () => {
    if (!gpa.average || !gpa.distribution) {
      return null;
    }

    return (
      <div className="pt-3">
        <UIGPADistributionVis
          average={gpa.average}
          middle50Range={gpa.distribution.middle50Interval}
          middle75Range={gpa.distribution.middle75Interval}
          middle90Range={gpa.distribution.middle90Interval}
        />
      </div>
    );
  };

  return (
    <CoursePreviewCard
      title={title}
      creditHours={hours}
      className="mb-2"
      isFocused={isFocused}
      {...rest}
    >
      <p>{description}</p>
      {renderCourseInsert()}
      {renderGeneralEducation()}
      {renderGPAVisualization()}
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
  const course = coursesById.get(ownProps.courseId);
  const props = {
    course_id: course.get('code')
  };
  return {
    course,
    gpa: {
      distribution: calculateDistributionIntervalsByCourseId(state, props),
      average: calculateAverageGPAByCourseId(state, props)
    },
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
