import React from 'react';
import PropTypes from 'prop-types';

import UITag from '../../../UIComponents/tag/UITag';

import GeneralEducationMap from '../../../constants/GeneralEducationMap';

const GeneralEducation = ({ requirements }) => {
  if (!requirements || requirements.length === 0) {
    return null;
  }

  return (
    <>
      {requirements.map(requirement => (
        <UITag use="warning" key={requirement}>
          {GeneralEducationMap[requirement]}
        </UITag>
      ))}
    </>
  );
};

GeneralEducation.propTypes = {
  label: PropTypes.string,
  requirements: PropTypes.arrayOf(PropTypes.string)
};

export default GeneralEducation;
