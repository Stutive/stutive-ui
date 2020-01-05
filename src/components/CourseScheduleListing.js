import React from 'react';
import styled from 'styled-components';

import * as Colors from '../UIComponents/StyleTokens/colors';
import FormattedCreditHours from '../UIComponents/FormatLib/FormattedCreditHours';
import UIFlex from '../UIComponents/layout/UIFlex';
import UIIcon from '../UIComponents/icon/UIIcon';

const Listing = styled.div`
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
`;

const CreditHours = styled.p`
  font-size: 1rem;
  font-weight: 300;
  padding: 0;
  margin: 0;
`;

const CourseScheduleListing = ({ course, handleRemoveCourse }) => {
  return (
    <Listing>
      <UIFlex>
        <div style={{ flexGrow: 1 }}>
          <Title>{course.title}</Title>
          <CreditHours>
            <FormattedCreditHours value={course.hours} />
          </CreditHours>
        </div>
        <UIIcon
          color={Colors.OZ}
          onClick={handleRemoveCourse}
          name="fas fa-times"
          size="small"
        />
      </UIFlex>
    </Listing>
  );
};

export default CourseScheduleListing;
