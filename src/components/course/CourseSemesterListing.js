import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UIButton from '../../UIComponents/buttons/UIButton';
import UITruncateString from '../../UIComponents/text/UITruncateString';
import FormattedCreditHours from '../../UIComponents/FormatLib/FormattedCreditHours';

import SemesterListing from '../semester/SemesterListing';

const CourseCode = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  font-weight: 500;
  font-size: 1em;
`;

const CourseTitle = styled.span`
  flex-grow: 1;
  font-size: 1em;
`;

const CreditHours = styled.span`
  flex-basis: auto;
  flex-shrink: 0;
  font-size: 1em;
  font-weight: 300;
`;

const CourseSemesterListing = ({
  courseCode = '',
  courseTitle = '',
  hours = [],
  onRemove = () => {}
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SemesterListing
      align="center"
      className="mb-1"
      isClickable={true}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CourseCode className="mr-1">{courseCode}</CourseCode>
      <CourseTitle className="pr-2">
        <UITruncateString>{courseTitle}</UITruncateString>
      </CourseTitle>
      <CreditHours>
        <FormattedCreditHours value={hours} />
      </CreditHours>
      {isHovered && <DeleteButton onClick={onRemove}>Delete</DeleteButton>}
    </SemesterListing>
  );
};

const DeleteButton = ({ ...props }) => (
  <UIButton
    className="ml-3"
    use="danger"
    style={{
      /* TODO: "slim button" - Move these into UIButton component */
      lineHeight: 1,
      padding: '.5em 1em',
      flexShrink: 0, // Prevent wrapping
      margin: 0
    }}
    {...props}
  />
);

CourseSemesterListing.propTypes = {
  courseCode: PropTypes.string,
  courseTitle: PropTypes.string,
  hours: PropTypes.array
};

export default CourseSemesterListing;
