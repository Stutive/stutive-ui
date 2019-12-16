import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UITruncateString from '../text/UITruncateString';

import * as Tokens from '../../constants/tokens';

const EMPTY_FUNCTION = () => {};

/**
 *  Option Wrappers
 */
const DefaultOptionWrapper = styled.div`
  border-bottom: 1px solid #cccccc;
  padding: 0.6em 1.5em;
`;

const FocusedOptionWrapper = styled(DefaultOptionWrapper)`
  background-color: ${Tokens.CALYPSO_LIGHT};
`;

/**
 *  Option
 */
const DefaultOption = styled.span``;

const UISelectOption = ({
  focused = false,
  text,
  onClick = EMPTY_FUNCTION,
  onMouseEnter = EMPTY_FUNCTION
}) => {
  const Wrapper = focused ? FocusedOptionWrapper : DefaultOptionWrapper;
  return (
    <Wrapper onClick={onClick} onMouseEnter={onMouseEnter}>
      <DefaultOption>
        <UITruncateString>{text}</UITruncateString>
      </DefaultOption>
    </Wrapper>
  );
};

UISelectOption.propTypes = {
  focused: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func
};

export default UISelectOption;
