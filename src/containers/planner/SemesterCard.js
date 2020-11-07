import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UICard from '../../UIComponents/containers/UICard';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UIIcon from '../../UIComponents/icon/UIIcon';
import UIReplacableText from '../../UIComponents/inputs/UIReplacableText';

import CourseSemesterListing from '../../components/course/CourseSemesterListing';
import SemesterListing from '../../components/semester/SemesterListing';

import {
  getCoursesWithIds,
  getTotalCreditHoursWithCourseIds
} from '../../selectors/courses';

const SemesterCard = ({
  id,
  title = '',
  totalCreditHours = 0,
  onAddCourseButtonClick = () => {},
  onChange = () => {},
  /* connect props */
  courses,
  /* prevent pass through */
  courseIds: _courseIds,
  dispatch: _dispatch,
  ...props
}) => {
  const handleLabelChange = newLabel => onChange(id, { label: newLabel });

  const renderTitle = () => {
    return (
      <UIFlex align="center" justify="center" style={{ width: '100%' }}>
        <h4>
          <UIReplacableText value={title} onChange={handleLabelChange} />
        </h4>
      </UIFlex>
    );
  };

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
        />
      );
    });

    return (
      <div style={{ flexGrow: 1, width: '100%' }}>
        {courses.length === 0 && <p>No courses in added to semester.</p>}
        {courseListings}
        <SemesterListing onClick={onAddCourseButtonClick} isClickable={true}>
          <UIFlex justify="center">
            <div>
              <UIIcon name="fas fa-plus" size="small" /> Add a Course
            </div>
          </UIFlex>
        </SemesterListing>
      </div>
    );
  };

  const renderTotalCreditHours = () => (
    <UIFlex className="pt-3" justify="flex-end" style={{ width: '100%' }}>
      <div>
        <span style={{ fontWeight: 500 }}>Total Credit Hours:</span>{' '}
        {totalCreditHours}
      </div>
    </UIFlex>
  );

  return (
    <div style={{ flexBasis: '25em', maxWidth: '50%', flexGrow: 1 }} {...props}>
      <UICard style={{ height: '100%' }}>
        <UIFlex direction="column" style={{ height: '100%' }}>
          {renderTitle()}
          {renderBody()}
          {renderTotalCreditHours()}
        </UIFlex>
      </UICard>
    </div>
  );
};

SemesterCard.propTypes = {
  title: PropTypes.string,
  courseIds: PropTypes.object /* ImmutableJS List */,
  totalCreditHours: PropTypes.number
};

const mapStateToProps = (state, props) => ({
  courses: getCoursesWithIds(state, props.courseIds),
  totalCreditHours: getTotalCreditHoursWithCourseIds(state, props.courseIds)
});

export default connect(mapStateToProps, null)(SemesterCard);
