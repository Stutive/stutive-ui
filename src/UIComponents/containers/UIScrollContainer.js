import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ScrollContainer = styled.div`
  overflow-y: ${({ isVertical }) => (isVertical ? 'scroll' : 'hidden')};
  overflow-x: ${({ isVertical }) => (isVertical ? 'hidden' : 'scroll')};
  white-space: ${({ isVertical }) => (isVertical ? 'normal' : 'nowrap')};
`;

const UIScrollContainer = ({ children = null, direction = 'column' }) => (
  <ScrollContainer isVertical={direction === 'column'}>
    {children}
  </ScrollContainer>
);

UIScrollContainer.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string
};

export default UIScrollContainer;
