import React from 'react';

import UIContainer from './UIContainer';
import UICard from './UICard';

export default {
  component: UICard,
  title: 'UICard'
};

export const withText = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UICard>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </UICard>
    </UIContainer>
  );
};

export const withTextAndTitle = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UICard title="Some title here">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </UICard>
    </UIContainer>
  );
};
