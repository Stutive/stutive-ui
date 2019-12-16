import React from 'react';

import UIContainer from '../containers/UIContainer';
import UITruncateString from './UITruncateString';

export default {
  component: UITruncateString,
  title: 'UITruncateString'
};
export const usage = () => (
  <UIContainer className="pt-5">
    <div
      className="mb-3"
      style={{
        border: '1px solid red',
        width: '100px'
      }}
    >
      <UITruncateString>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </UITruncateString>
    </div>
    <div
      className="mb-3"
      style={{
        border: '1px solid red',
        width: '200px'
      }}
    >
      <UITruncateString>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </UITruncateString>
    </div>
    <div
      className="mb-3"
      style={{
        border: '1px solid red',
        width: '100%'
      }}
    >
      <UITruncateString>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </UITruncateString>
    </div>
  </UIContainer>
);
