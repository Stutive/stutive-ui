import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  OZ,
  PANTERA,
  OZ_MEDIUM,
  OZ_LIGHT,
  OZ_DARK
} from '../StyleTokens/colors';

const MIN_GPA = 0.0;
const MAX_GPA = 4.0;
const BAR_HEIGHT = 10;

const Bar = styled.div`
  top: 10px;
  left: 0;
  position: absolute;
  width: 100%;
  background-color: ${OZ_LIGHT};
  height: ${BAR_HEIGHT}px;
  border-radius: 0.25em;
`;

const Middle50 = styled(Bar)`
  z-index: 3;
  background-color: ${OZ_DARK};
`;

const Middle75 = styled(Bar)`
  z-index: 2;
  background-color: ${OZ};
`;

const Middle90 = styled(Bar)`
  z-index: 1;
  background-color: ${OZ_MEDIUM};
`;

const Average = styled.div`
  z-index: 4;
  top: 10px;
  position: absolute;
  width: 2px;
  height: ${BAR_HEIGHT}px;
  background-color: ${PANTERA};
`;

const LABEL_WIDTH = 20;
const Label = styled.div`
  top: -10px;
  position: absolute;
  font-size: 0.8em;
`;

function calculateRangeStyles(middle50Range) {
  const [min, max] = middle50Range;

  const widthVal = ((max - min) / (MAX_GPA - MIN_GPA)) * 100;
  const width = `${widthVal}%`;

  const leftVal = (min / (MAX_GPA - MIN_GPA)) * 100;
  const left = `${leftVal}%`;

  return {
    width,
    left
  };
}

function calculateAverageStyles(average) {
  const leftVal = (average / (MAX_GPA - MIN_GPA)) * 100;
  const left = `${leftVal}%`;

  return {
    left
  };
}

const UIDistributionVis = ({
  average = null,
  middle50Range = null,
  middle75Range = null,
  middle90Range = null
}) => (
  <div style={{ height: '30px', position: 'relative' }}>
    <Label style={{ left: '0%' }}>0.0</Label>
    <Label
      style={{
        left: `calc(25% - 10px)`
      }}
    >
      1.0
    </Label>
    <Label
      style={{
        left: `calc(50% - ${LABEL_WIDTH / 2}px)`
      }}
    >
      2.0
    </Label>
    <Label
      style={{
        left: `calc(75% - ${LABEL_WIDTH / 2}px)`
      }}
    >
      3.0
    </Label>
    <Label
      style={{
        left: `calc(100% - ${LABEL_WIDTH}px)`
      }}
    >
      4.0
    </Label>
    <Bar />
    {middle50Range && <Middle50 style={calculateRangeStyles(middle50Range)} />}
    {middle75Range && <Middle75 style={calculateRangeStyles(middle75Range)} />}
    {middle90Range && <Middle90 style={calculateRangeStyles(middle90Range)} />}
    {average && <Average style={calculateAverageStyles(average)} />}
  </div>
);

UIDistributionVis.propTypes = {
  average: PropTypes.number,
  middle50Range: PropTypes.arrayOf(PropTypes.number),
  middle75Range: PropTypes.arrayOf(PropTypes.number),
  middle90Range: PropTypes.arrayOf(PropTypes.number)
};

export default UIDistributionVis;
