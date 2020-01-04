import React from 'react';

import UIContainer from '../containers/UIContainer';
import UISpinner from './UISpinner';

export default {
  component: UISpinner,
  title: 'UISpinner'
};

export const listStyles = () => {
  return (
    <>
      <UIContainer style={{ paddingTop: '2em' }}>
        <UISpinner />
      </UIContainer>
    </>
  );
};
