import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import * as Colors from '../StyleTokens/colors';
import { SIEBEL_LAYER } from '../StyleTokens/sizes';

import UIFlex from '../layout/UIFlex';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .9;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: .9;
  }
  to {
    opacity: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${SIEBEL_LAYER};

  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: ${Colors.OBSIDIAN};
    opacity: 0.9;
    animation: ${props => (props.show ? fadeIn : fadeOut)} 0.2s ease-in-out;
  }
`;

const UIOverlay = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <Overlay onAnimationEnd={onAnimationEnd} show={show}>
        <UIFlex direction="column" justify="center" style={{ height: '100%' }}>
          <UIFlex justify="center" style={{ width: '100%' }}>
            {children}
          </UIFlex>
        </UIFlex>
      </Overlay>
    )
  );
};

UIOverlay.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired
};

export default UIOverlay;
