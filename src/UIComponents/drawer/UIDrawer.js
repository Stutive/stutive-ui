import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import UIFlex from '../layout/UIFlex';

import * as Colors from '../StyleTokens/colors';
import useHandleClickOutside from '../lib/useHandleClickOutside';

const EMPTY_FUNCTION = () => {};

const onEnter = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const onExit = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const DrawerContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 300px;
  padding: 1rem;
  background-color: ${Colors.KOALA};
  border-radius: 1em 1em 0 0;
  border: 1px solid ${Colors.FLINT};
  border-bottom: none;
  animation: ${({ show }) => (show ? onEnter : onExit)} 0.2s
    ${({ show }) => (show ? 'ease-out' : 'ease-in')};
`;

const DrawerTitle = styled.h5`
  color: ${Colors.OBSIDIAN};
`;

const UIDrawer = ({
  children = null,
  onClickOutside = EMPTY_FUNCTION,
  show = false,
  title = ''
}) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  const drawerRef = useRef(null);
  useHandleClickOutside(drawerRef, onClickOutside);

  if (!shouldRender) {
    return null;
  }

  return (
    <DrawerContainer
      ref={drawerRef}
      show={show}
      onAnimationEnd={onAnimationEnd}
    >
      <UIFlex justify="center">
        <DrawerTitle>{title}</DrawerTitle>
      </UIFlex>
      <div>{children}</div>
    </DrawerContainer>
  );
};

UIDrawer.propTypes = {
  title: PropTypes.string,
  onClickOutside: PropTypes.func,
  show: PropTypes.bool
};

export default UIDrawer;
