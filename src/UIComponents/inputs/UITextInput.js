import React from 'react';
import styled from 'styled-components';

import UIIcon from '../icon/UIIcon';
import UIFlex from '../layout/UIFlex';

import * as Tokens from '../../constants/tokens';

const InputBorder = styled.div`
  position: relative;
  width: 100%;
  background-color: ${Tokens.OLAF}
  border-radius: 0.3rem;
  border: 1px solid ${Tokens.BATTLESHIP};
  padding: 0.2rem 0.4rem;
  &:focus-within {
    border: 1px solid ${Tokens.CALYPSO_MEDIUM};
  }
`;

const Input = styled.input`
  flex: 1;
  background-color: none;
  border: none;
  &:focus {
    border: none;
    outline: none !important;
  }
`;

export const UIUnwrappedTextInput = ({
  iconRight = null,
  textInputRef = null,
  value,
  ...props
}) => {
  let renderedIconRight = null;
  if (typeof iconRight === 'string') {
    renderedIconRight = <UIIcon name={iconRight} size="small" />;
  } else if (iconRight) {
    renderedIconRight = iconRight;
  }
  return (
    <InputBorder>
      <UIFlex align="center">
        <Input
          autoComplete="off"
          type="text"
          name="hi"
          ref={textInputRef}
          value={value || ''}
          {...props}
        />
        {renderedIconRight}
      </UIFlex>
    </InputBorder>
  );
};

const UITextInput = props => (
  <div className="p-2">
    <UIUnwrappedTextInput {...props} />
  </div>
);

export default UITextInput;
