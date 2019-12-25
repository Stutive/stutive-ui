import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UICard from '../UIComponents/containers/UICard';
import UIFlex from '../UIComponents/layout/UIFlex';
import UIList from '../UIComponents/list/UIList';

import GeneralEducationMap from '../constants/GeneralEducationMap';
import CourseInsert from './CourseInsert';

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

const GenEdLabel = styled.p`
  font-weight: 500;
  font-size: 1.1em;
  margin: 0;
`;

const CoursePreviewCard = ({
  title,
  creditHours,
  description,
  generalEducationRequirements,
  equivalentCourse = null,
  ...props
}) => {
  const renderSatisfiedGeneralEducationCriteria = () => {
    if (
      !generalEducationRequirements ||
      generalEducationRequirements.length === 0
    ) {
      return null;
    }
    return (
      <>
        <GenEdLabel className="mb-1">
          Satisfies General Education Criteria in Spring 2020 for:
        </GenEdLabel>
        <UIList childClassName="mb-2">
          {generalEducationRequirements.map(requirement => (
            <span key={requirement}>{GeneralEducationMap[requirement]}</span>
          ))}
        </UIList>
      </>
    );
  };
  return (
    <UICard {...props}>
      <UIFlex align="center" wrap="wrap">
        <Title>{title}</Title>
        <CreditHours>{creditHours}</CreditHours>
      </UIFlex>
      <p>{description}</p>
      {equivalentCourse && (
        <CourseInsert
          title={equivalentCourse.title}
          description={equivalentCourse.description}
        ></CourseInsert>
      )}
      {renderSatisfiedGeneralEducationCriteria()}
    </UICard>
  );
};

CoursePreviewCard.propTypes = {
  title: PropTypes.string,
  creditHours: PropTypes.string,
  description: PropTypes.string,
  generalEducationRequirements: PropTypes.any //  TODO: Figure this shit out
};

export default CoursePreviewCard;
