import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import UIFlex from '../layout/UIFlex';
import UIIcon from '../icon/UIIcon';

import * as Tokens from '../../constants/tokens';

const Tag = styled.div`
  color: ${Tokens.OBSIDIAN};
  display: inline-block;
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

const UITag = ({ children, closeable, onCloseClick, use, ...props }) => {
  const colors = getColors(use);
  const dynamicStyles = {
    backgroundColor: colors.background,
    borderColor: colors.border
  };
  return (
    <Tag className="m-1" style={dynamicStyles} {...props}>
      <UIFlex align="center">
        <div
          className={classNames(
            'pl-2',
            {
              'mr-1': closeable
            },
            {
              'pr-2': !closeable
            },
            {
              'pr-1': closeable
            }
          )}
        >
          {children}
        </div>
        {closeable && (
          <UIIcon
            className="mr-2"
            color={Tokens.SLINKY}
            name="fas fa-times"
            onClick={e => {
              e.stopPropagation();
              onCloseClick();
            }}
            size="small"
          />
        )}
      </UIFlex>
    </Tag>
  );
};

export default UITag;
