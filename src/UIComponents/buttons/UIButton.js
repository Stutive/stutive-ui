import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';

import ButtonColors from './constants/ButtonColors';

const UIButton = ({ active, children, use, hovered, onClick, ...rest }) => {
  const colors = ButtonColors[use];
  const StyledButton = styled(Button)`
    border: ${colors.border ? `1px solid ${colors.border}` : 'none'};
    margin-right: 8px;
    background-color: ${colors.background[
      active ? 'active' : hovered ? 'hover' : 'idle'
    ]};
    color: ${colors.text};
    &:hover {
      background-color: ${colors.background.hover} !important;
      border: ${colors.border ? `1px solid ${colors.border}` : 'none'};
      color: ${colors.text};
    }
    &:focus {
      background-color: ${colors.background.idle};
      border: ${colors.border ? `1px solid ${colors.border}` : 'none'};
      color: ${colors.text};
      outline: none !important;
      box-shadow: none;
    }
    &:active {
      background-color: ${colors.background.active} !important;
      outline: none !important;
      box-shadow: none;
    }
  `;

  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

UIButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  use: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'tertiary-light',
    'danger'
  ]),
  onClick: PropTypes.func
};

UIButton.defaultProps = {
  active: false,
  use: 'primary',
  hovered: false,
  onClick: () => {}
};

export default UIButton;
