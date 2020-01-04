import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getById } from '../../selectors/courses';
import CourseModel from '../../models/Course';

import CoursePreviewCard from '../../components/CoursePreviewCard';
import CourseInsert from '../../components/course/sections/CourseInsert';
import GeneralEducation from '../../components/course/sections/GeneralEducation';

const CoursePreviewCardContainer = ({ course }) => {
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
    </CoursePreviewCard>
  );
};

CoursePreviewCardContainer.propTypes = {
  courseId: PropTypes.number.isRequired,
  /*  @connect  */
  course: PropTypes.instanceOf(CourseModel)
};

const mapStateToProps = (state, ownProps) => {
  const coursesById = getById(state);
  return {
    course: coursesById.get(ownProps.courseId)
  };
};

export default connect(mapStateToProps, null)(CoursePreviewCardContainer);
