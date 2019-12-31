import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import UIFlex from '../layout/UIFlex';
import UIIcon from '../icon/UIIcon';

import * as Colors from '../StyleTokens/colors';

const Tag = styled.div`
  color: ${Colors.OBSIDIAN};
  display: inline-block;
  font-size: ${props => (props.size === 'small' ? '0.75em' : '.9em')};
  padding: ${props => (props.size === 'small' ? '0' : '.3em')};
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.borderColor};
`;

const getColors = type => {
  switch (type) {
    case 'success': {
      return {
        background: Colors.OZ_LIGHT,
        border: Colors.OZ_MEDIUM
      };
    }
    case 'warning': {
      return {
        background: Colors.MARIGOLD_LIGHT,
        border: Colors.MARIGOLD_MEDIUM
      };
    }
    case 'danger': {
      return {
        background: Colors.CANDY_APPLE_LIGHT,
        border: Colors.CANDY_APPLE_MEDIUM
      };
    }
    case 'default':
    default: {
      return {
        background: Colors.KOALA,
        border: Colors.EERIE
      };
    }
  }
};

const UITag = ({
  children,
  closeable,
  onCloseClick,
  size = 'small',
  use,
  ...props
}) => {
  const colors = getColors(use);
  return (
    <Tag
      backgroundColor={colors.background}
      borderColor={colors.border}
      className="m-1"
      size={size}
      {...props}
    >
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
            color={Colors.SLINKY}
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
