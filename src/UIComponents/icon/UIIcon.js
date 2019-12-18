import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { OBSIDIAN } from '../StyleTokens/colors';

const SIZE_MAP = {
  small: 16,
  medium: 32,
  large: 48
};

const StyledIcon = styled.i`
  padding: 2px;
`;

const UIIcon = ({
  className,
  color = OBSIDIAN,
  name = 'fas fa-angry',
  size = 'medium',
  style,
  ...props
}) => {
  const dynamicStyles = {
    color,
    fontSize: SIZE_MAP[size],
    width: SIZE_MAP[size]
  };
  return (
    <StyledIcon
      className={classNames(className, name)}
      style={{
        ...style,
        ...dynamicStyles
      }}
      {...props}
    ></StyledIcon>
  );
};

UIIcon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default UIIcon;
