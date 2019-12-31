import React from 'react';

import UIContainer from '../containers/UIContainer';

import useDeviceType from '../lib/useDeviceType';

export default {
  component: UIContainer,
  title: 'useDeviceType'
};

const Test = () => {
  const deviceType = useDeviceType();
  return (
    <div>
      <h1>{deviceType}</h1>
    </div>
  );
};

export const listStyles = () => {
  return (
    <UIContainer>
      <Test />
    </UIContainer>
  );
};
