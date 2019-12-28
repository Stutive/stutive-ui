import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UIList from '../../../UIComponents/list/UIList';

import GeneralEducationMap from '../../../constants/GeneralEducationMap';

const GenEdLabel = styled.p`
  font-weight: 500;
  font-size: 1.1em;
  margin: 0;
`;

const GeneralEducation = ({ requirements }) => {
  if (!requirements || requirements.length === 0) {
    return null;
  }

  return (
    <>
      <GenEdLabel className="mb-1">
        Satisfies General Education Criteria in Spring 2020 for:
      </GenEdLabel>
      <UIList childClassName="mb-2">
        {requirements.map(requirement => (
          <span key={requirement}>{GeneralEducationMap[requirement]}</span>
        ))}
      </UIList>
    </>
  );
};

GeneralEducation.propTypes = {
  label: PropTypes.string,
  requirements: PropTypes.arrayOf(PropTypes.string)
};

export default GeneralEducation;
