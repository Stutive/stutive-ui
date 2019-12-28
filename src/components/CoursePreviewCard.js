import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UICard from '../UIComponents/containers/UICard';
import UIFlex from '../UIComponents/layout/UIFlex';

const Title = styled.p`
  flex: 1;
  font-size: 1.4em;
  font-weight: 600;
`;

const CreditHours = styled.p`
  flex-basis: initial;
  whitespace: nowrap;
  font-weight: 200;
  font-size: 1.2em;
`;

const CoursePreviewCard = ({
  title,
  creditHours,
  children,
  equivalentCourse = null,
  ...props
}) => {
  return (
    <UICard {...props}>
      <UIFlex align="center" wrap="wrap">
        <Title>{title}</Title>
        <CreditHours>{creditHours}</CreditHours>
      </UIFlex>
      {children}
    </UICard>
  );
};

CoursePreviewCard.propTypes = {
  title: PropTypes.string,
  creditHours: PropTypes.string,
  children: PropTypes.node
};

export default CoursePreviewCard;
