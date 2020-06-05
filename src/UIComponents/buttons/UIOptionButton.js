import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UIFlex from '../layout/UIFlex';

import ButtonColors from './constants/ButtonColors';
import { BORDER_RADIUS } from '../StyleTokens/common';

const Button = styled.div`
  width: 10em;
  height: 10em;
  padding: 0.8em;
  border: ${({ colors }) =>
    colors.border ? `1px solid ${colors.border}` : 'none'};
  border-radius: ${BORDER_RADIUS.DEFAULT};
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: ${({ colors, active, hovered }) =>
    colors.background[active ? 'active' : hovered ? 'hover' : 'idle']};
  color: ${({ colors }) => colors.text};

  &:hover {
    background-color: ${({ colors }) => colors.background.hover} !important;
    border: ${({ colors }) =>
      colors.border ? `1px solid ${colors.border}` : 'none'};
    color: ${({ colors }) => colors.text};
  }
  &:focus {
    background-color: ${({ colors }) => colors.background.idle};
    border: ${({ colors }) =>
      colors.border ? `1px solid ${colors.border}` : 'none'};
    color: ${({ colors }) => colors.text};
    outline: none !important;
    box-shadow: none;
  }
  &:active {
    background-color: ${({ colors }) => colors.background.active} !important;
    outline: none !important;
    box-shadow: none;
  }
`;

const UIOptionButton = ({
  active = false,
  children,
  use = 'primary',
  hovered = false,
  onClick = () => {},
  ...props
}) => {
  const colors = ButtonColors[use];

  const renderBody = () => {
    if (typeof children === 'string') {
      return (
        <UIFlex
          justify="center"
          style={{ flexGrow: 1, height: '100%', width: '100%' }}
        >
          <UIFlex
            direction="column"
            justify="center"
            style={{ height: '100%', width: 'initial' }}
          >
            <h5 className="text-center" style={{ color: colors.text }}>
              {children}
            </h5>
          </UIFlex>
        </UIFlex>
      );
    } else {
      return children;
    }
  };
  return (
    <Button
      active={active}
      colors={colors}
      hovered={hovered}
      onClick={onClick}
      {...props}
    >
      {renderBody()}
    </Button>
  );
};

UIOptionButton.withIcon = ({ iconComponent = null, labelComponent = null }) => (
  <UIFlex direction="column" style={{ height: '100%' }}>
    <UIFlex justify="center" style={{ flexGrow: 1, width: '100%' }}>
      <UIFlex direction="column" justify="center" style={{ height: '100%' }}>
        {iconComponent}
      </UIFlex>
    </UIFlex>
    <UIFlex justify="center" style={{ flexGrow: -1, width: '100%' }}>
      {labelComponent}
    </UIFlex>
  </UIFlex>
);

UIOptionButton.getColor = use => ButtonColors[use].text;

UIOptionButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  use: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'tertiary-light']),
  onClick: PropTypes.func
};

export default UIOptionButton;
