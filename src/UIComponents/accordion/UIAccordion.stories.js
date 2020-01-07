import React from 'react';

import UIContainer from '../containers/UIContainer';
import UIAccordion from './UIAccordion';

export default {
  component: UIAccordion,
  title: 'UIAccordion'
};

export const basicUsage = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UIAccordion title="Hello World">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </UIAccordion>
    </UIContainer>
  );
};
