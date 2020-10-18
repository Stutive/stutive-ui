import React from 'react';
import PropTypes from 'prop-types';

import UICard from '../../UIComponents/containers/UICard';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UIIcon from '../../UIComponents/icon/UIIcon';

import CourseSemesterListing from '../course/CourseSemesterListing';
import SemesterListing from './SemesterListing';

const SemesterCard = ({
  title = '',
  courses = [],
  totalCreditHours = '',
  onAddCourseButtonClick = () => {},
  ...props
}) => {
  const addCourseButton = (
    <SemesterListing onClick={onAddCourseButtonClick} isClickable={true}>
      <UIFlex justify="center">
        <div>
          <UIIcon name="fas fa-plus" size="small" /> Add a Course
        </div>
      </UIFlex>
    </SemesterListing>
  );
  const courseListings = courses.map(({ courseCode, courseTitle, hours }) => (
    <CourseSemesterListing
      courseCode={courseCode}
      courseTitle={courseTitle}
      hours={hours}
    />
  ));
  courseListings.push(addCourseButton);

  const renderTotalCreditHours = () => (
    <UIFlex className="pt-3" justify="flex-end" style={{ width: '100%' }}>
      <div>
        <span style={{ fontWeight: 500 }}>Total Credit Hours:</span>{' '}
        {totalCreditHours}
      </div>
    </UIFlex>
  );

  return (
    <div style={{ flexBasis: '30em', flexGrow: 1, padding: '5px' }}>
      <UICard style={{ height: '100%' }} {...props}>
        <UIFlex direction="column" style={{ height: '100%' }}>
          <h5>{title}</h5>
          <div style={{ flexGrow: 1, width: '100%' }}>{courseListings}</div>
          {renderTotalCreditHours()}
        </UIFlex>
      </UICard>
    </div>
  );
};

SemesterCard.propTypes = {
  title: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.object),
  totalCreditHours: PropTypes.string
};

export default SemesterCard;
