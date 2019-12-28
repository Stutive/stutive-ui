import React from 'react';

import * as Colors from '../StyleTokens/colors';

import UIContainer from '../containers/UIContainer';
import UIOverlay from './UIOverlay';
import UIList from '../list/UIList';

export default {
  component: UIOverlay,
  title: 'UIOverlay'
};

export const usage = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <h5>Unstyled Unordered</h5>
      <UIOverlay>
        <h1
          style={{
            color: Colors.OLAF,
            textAlign: 'center'
          }}
        >
          This is an overlay.
        </h1>
      </UIOverlay>
      <UIList>
        <span>List Item 1</span>
        <span>List Item 2</span>
        <span>List Item 3</span>
        <span>List Item 4</span>
      </UIList>
    </UIContainer>
  );
};
