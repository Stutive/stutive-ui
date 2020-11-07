import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UIIcon from '../../UIComponents/icon/UIIcon';

import CourseSemesterListing from '../../components/course/CourseSemesterListing';
import SemesterCard from '../../components/semester/SemesterCard';
import SemesterListing from '../../components/semester/SemesterListing';

import {
  getCoursesWithIds,
  getTotalCreditHoursWithCourseIds
} from '../../selectors/courses';
import {
  removeSemester,
  removeCourseFromSemester
} from '../../actions/GraduationPlan';

const SemesterCardContainer = ({
  id,
  title = '',
  totalCreditHours = 0,
  onAddCourseButtonClick = () => {},
  onChange = () => {},
  /* connect props */
  courses,
  removeSemester,
  removeCourseFromSemester,
  /* prevent pass through */
  courseIds: _courseIds,
  dispatch: _dispatch,
  ...props
}) => {
  const handleLabelChange = newLabel => onChange(id, { label: newLabel });

  const renderBody = () => {
    const courseListings = courses.map(course => {
      const courseId = course.get('id');
      const courseCode = course.get('code');
      const courseTitle = course.get('name');
      const hours = course.get('hours').toJS();

      return (
        <CourseSemesterListing
          key={courseId}
          courseCode={courseCode}
          courseTitle={courseTitle}
          hours={hours}
          onRemove={() => removeCourseFromSemester(id, courseId)}
        />
      );
    });

    return (
      <div style={{ flexGrow: 1, width: '100%' }}>
        {courses.count() === 0 && <p>No courses added to this semester.</p>}
        {courseListings}
        <SemesterListing
          className="mb-1"
          justify="center"
          onClick={onAddCourseButtonClick}
          isClickable={true}
        >
          <div>
            <UIIcon name="fas fa-plus" size="small" /> Add a Course
          </div>
        </SemesterListing>
        <SemesterListing
          justify="center"
          onClick={onAddCourseButtonClick}
          isClickable={true}
        >
          <div>
            <UIIcon name="fas fa-plus" size="small" /> Add a Placeholder
          </div>
        </SemesterListing>
      </div>
    );
  };

  return (
    <SemesterCard
      label={title}
      onLabelChange={handleLabelChange}
      totalCreditHours={totalCreditHours}
      onRemoveSemester={() => removeSemester(id)}
      {...props}
    >
      {renderBody()}
    </SemesterCard>
  );
};

SemesterCardContainer.propTypes = {
  title: PropTypes.string,
  courseIds: PropTypes.object /* ImmutableJS List */,
  totalCreditHours: PropTypes.number
};

const mapStateToProps = (state, props) => ({
  courses: getCoursesWithIds(state, props.courseIds),
  totalCreditHours: getTotalCreditHoursWithCourseIds(state, props.courseIds)
});

const mapDispatchToProps = {
  removeSemester,
  removeCourseFromSemester
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SemesterCardContainer);
