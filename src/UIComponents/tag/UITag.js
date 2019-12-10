import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import UIFlex from '../layout/UIFlex';

import * as Tokens from '../../constants/tokens';

const Tag = styled.div`
  display: inline-block;
  padding: 0.2em 0.7em;
  font-size: 0.75em;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
`;

const getColors = type => {
  switch (type) {
    case 'success': {
      return {
        background: Tokens.OZ_LIGHT,
        border: Tokens.OZ_MEDIUM
      };
    }
    case 'warning': {
      return {
        background: Tokens.MARIGOLD_LIGHT,
        border: Tokens.MARIGOLD_MEDIUM
      };
    }
    case 'danger': {
      return {
        background: Tokens.CANDY_APPLE_LIGHT,
        border: Tokens.CANDY_APPLE_MEDIUM
      };
    }
    case 'default':
    default: {
      return {
        background: Tokens.KOALA,
        border: Tokens.EERIE
      };
    }
  }
};

const UITag = ({ children, closeable, use, ...props }) => {
  const colors = getColors(use);
  const dynamicStyles = {
    backgroundColor: colors.background,
    borderColor: colors.border
  };
  return (
    <Tag className="ml-1 mr-1" style={dynamicStyles} {...props}>
      <UIFlex align="center">
        <div
          className={classNames({
            'mr-1': closeable
          })}
        >
          {children}
        </div>
      </UIFlex>
    </Tag>
  );
};

export default UITag;
