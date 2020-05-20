import React from 'react';
import PropTypes from 'prop-types';

import UITag from '../../../UIComponents/tag/UITag';

import GeneralEducationMap from '../../../constants/GeneralEducationMap';

const GeneralEducation = ({ requirements }) => {
  if (!requirements || requirements.length === 0) {
    return null;
  }

  return (
    <div className="p-1">
      {requirements.map(requirement => (
        <UITag use="warning" key={requirement}>
          {GeneralEducationMap[requirement]}
        </UITag>
      ))}
    </div>
  );
};

GeneralEducation.propTypes = {
  label: PropTypes.string,
  requirements: PropTypes.arrayOf(PropTypes.string)
};

export default GeneralEducation;
