import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Colors from '../StyleTokens/colors';
import { SIEBEL_LAYER } from '../StyleTokens/sizes';

import UIFlex from '../layout/UIFlex';

const Overlay = styled.div`
  position: absolute;
  background-color: ${Colors.OBSIDIAN};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
  z-index: ${SIEBEL_LAYER};
`;

const UIOverlay = ({ children }) => {
  return (
    <Overlay>
      <UIFlex direction="column" justify="center" style={{ height: '100%' }}>
        <UIFlex justify="center" style={{ width: '100%' }}>
          {children}
        </UIFlex>
      </UIFlex>
    </Overlay>
  );
};

UIOverlay.propTypes = {
  children: PropTypes.node
};

export default UIOverlay;
