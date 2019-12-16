import React from 'react';

import UIContainer from '../containers/UIContainer';
import UITruncateParagraph from './UITruncateParagraph';

export default {
  component: UITruncateParagraph,
  title: 'UITruncateParagraph'
};

export const usage = () => (
  <UIContainer className="mt-3">
    <div className="mb-3">
      <UITruncateParagraph maxLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </UITruncateParagraph>
    </div>
    <div className="mb-3">
      <UITruncateParagraph maxLines={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </UITruncateParagraph>
    </div>
  </UIContainer>
);
