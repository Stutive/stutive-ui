import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UITruncateString from '../../text/UITruncateString';

import * as Colors from '../../StyleTokens/colors';

const EMPTY_FUNCTION = () => {};

/**
 *  Option Wrappers
 */
const DefaultOptionWrapper = styled.div`
  border-bottom: 1px solid ${Colors.KOALA};
  padding: 0.6em 1.5em;
  &:hover {
    background-color: ${Colors.CALYPSO_LIGHT};
  }
`;

const FocusedOptionWrapper = styled(DefaultOptionWrapper)`
  background-color: ${Colors.CALYPSO_LIGHT};
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
