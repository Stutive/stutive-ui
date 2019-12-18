import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';

import UIFlex from '../layout/UIFlex';
import UIIcon from '../icon/UIIcon';
import UITruncateString from '../text/UITruncateString';

import UITag from '../tag/UITag';
import * as Tokens from '../../constants/tokens';

const EMPTY_FUNCTION = () => {};

const ButtonAnchor = styled(Button)`
  z-index: ${Tokens.QUAD_LAYER};
  padding: 0.2rem 0.6rem;
  width: 100%;
  min-height: 2.3rem;
  color: ${Tokens.OBSIDIAN};
  text-align: left;
  background-color: ${Tokens.GYPSUM};
  border: 1px solid ${Tokens.BATTLESHIP};
  &:hover {
    background-color: ${Tokens.GYPSUM};
    border: 1px solid ${Tokens.CALYPSO} !important;
    color: ${Tokens.OBSIDIAN};
  }
  &:active {
    background-color: ${Tokens.KOALA} !important;
    border: 1px solid ${Tokens.CALYPSO_DARK} !important;
    color: ${Tokens.OBSIDIAN} !important;
    outline: none !important;
    box-shadow: none !important;
  }
  &:focus {
    background-color: ${Tokens.GYPSUM};
    color: ${Tokens.OBSIDIAN};
    border: 1px solid ${Tokens.BATTLESHIP};
    outline: none !important;
    box-shadow: none !important;
  }
`;

const AnchorText = styled.span`
  flex: 1;
  padding-right: 10px;
`;

const PlaceholderText = styled(AnchorText)`
  font-weight: 300;
  color: ${Tokens.EERIE};
`;

const ValueText = styled(AnchorText)`
  color: ${Tokens.OBSIDIAN};
`;

const UISelectButtonAnchor = ({
  placeholder = '',
  value = null,
  iconRight = null,
  onClick = EMPTY_FUNCTION,
  onDeselect = EMPTY_FUNCTION
}) => {
  let renderedIconRight = null;
  if (typeof iconRight === 'string') {
    renderedIconRight = <UIIcon name={iconRight} size="small" />;
  } else if (iconRight) {
    renderedIconRight = iconRight;
  }

  const makeHandleDeselect = value => () => onDeselect(value);

  const renderSelected = () => {
    if (value && typeof value === 'string') {
      return (
        <ValueText onClick={onClick}>
          <UITruncateString>{value}</UITruncateString>
        </ValueText>
      );
    }

    if (value && Array.isArray(value)) {
      return (
        <>
          {value.map(val => (
            <UITag
              closeable={true}
              onCloseClick={makeHandleDeselect(val.value)}
            >
              {val.text}
            </UITag>
          ))}
          <div
            onClick={onClick}
            style={{ flex: 1, height: '100%', width: '100%' }}
          >
            {' '}
          </div>
        </>
      );
    }

    return (
      <PlaceholderText onClick={onClick}>
        <UITruncateString>{placeholder}</UITruncateString>
      </PlaceholderText>
    );
  };

  return (
    <ButtonAnchor>
      <UIFlex align="center">
        {renderSelected()}
        {renderedIconRight}
      </UIFlex>
    </ButtonAnchor>
  );
};

UISelectButtonAnchor.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  iconRight: PropTypes.any,
  onClick: PropTypes.func,
  onDeselect: PropTypes.func
};

export default UISelectButtonAnchor;
