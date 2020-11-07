import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UIFlex from '../../UIComponents/layout/UIFlex';
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
  hours = []
}) => {
  return (
    <SemesterListing className="mb-1">
      <UIFlex align="center">
        <CourseCode className="mr-1">{courseCode}</CourseCode>
        <CourseTitle className="pr-2">
          <UITruncateString>{courseTitle}</UITruncateString>
        </CourseTitle>
        <CreditHours>
          <FormattedCreditHours value={hours} />
        </CreditHours>
      </UIFlex>
    </SemesterListing>
  );
};

CourseSemesterListing.propTypes = {
  courseCode: PropTypes.string,
  courseTitle: PropTypes.string,
  hours: PropTypes.array
};

export default CourseSemesterListing;
