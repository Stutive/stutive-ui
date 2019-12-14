import React from 'react';
import styled from 'styled-components';

import * as Tokens from '../../constants/tokens';

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

const UISelectOption = ({ focused = false, text, value, use }) => {
  const Wrapper = focused ? FocusedOptionWrapper : DefaultOptionWrapper;
  return (
    <Wrapper>
      <DefaultOption>{text}</DefaultOption>
    </Wrapper>
  );
};

export default UISelectOption;
