import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UIFlex from '../layout/UIFlex';

import * as Colors from '../StyleTokens/colors';
import { slideUp, slideDown } from '../StyleTokens/keyframes';
import useHandleClickOutside from '../lib/useHandleClickOutside';

const EMPTY_FUNCTION = () => {};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${({ show }) => (show ? slideUp : slideDown)} 0.2s
    ${({ show }) => (show ? 'ease-out' : 'ease-in')};
`;

const DrawerContainer = styled.div`
  padding: 1rem;
  min-height: 300px;
  background-color: ${Colors.OLAF};
  border-radius: 1em 1em 0 0;
  border: 1px solid ${Colors.FLINT};
  border-bottom: none;
  box-shadow: 0px -3px 20px 0px rgba(0, 0, 0, 0.1);
`;

const DrawerTitle = styled.h5`
  color: ${Colors.OBSIDIAN};
`;

const UIDrawer = ({
  anchor = null,
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

  return (
    <Wrapper onAnimationEnd={onAnimationEnd} show={show}>
      {anchor}
      {shouldRender && (
        <DrawerContainer ref={drawerRef}>
          <UIFlex justify="center">
            <DrawerTitle>{title}</DrawerTitle>
          </UIFlex>
          <div className="pt-2">{children}</div>
        </DrawerContainer>
      )}
    </Wrapper>
  );
};

UIDrawer.propTypes = {
  anchor: PropTypes.node,
  title: PropTypes.string,
  onClickOutside: PropTypes.func,
  show: PropTypes.bool
};

export default UIDrawer;
