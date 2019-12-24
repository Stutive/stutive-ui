import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';

import UIFlex from '../../layout/UIFlex';
import UIIcon from '../../icon/UIIcon';
import UITruncateString from '../../text/UITruncateString';

import UITag from '../../tag/UITag';
import * as Colors from '../../StyleTokens/colors';
import { QUAD_LAYER } from '../../StyleTokens/sizes';

const EMPTY_FUNCTION = () => {};

const ButtonAnchor = styled(Button)`
  z-index: ${QUAD_LAYER};
  padding: 0.2rem 0.6rem;
  width: 100%;
  min-height: 2.3rem;
  text-align: left;
  background-color: ${Colors.GYPSUM};
  border: 1px solid ${Colors.BATTLESHIP};
  color: ${Colors.OBSIDIAN};
  &:hover {
    background-color: ${Colors.GYPSUM};
    border: 1px solid ${Colors.OZ} !important;
    color: ${Colors.OBSIDIAN};
  }
  &:active {
    background-color: ${Colors.KOALA} !important;
    border: 1px solid ${Colors.OZ_DARK} !important;
    color: ${Colors.OBSIDIAN} !important;
    outline: none !important;
    box-shadow: none !important;
  }
  &:focus {
    background-color: ${Colors.GYPSUM};
    border: 1px solid ${Colors.BATTLESHIP};
    color: ${Colors.OBSIDIAN};
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
  color: ${Colors.EERIE};
`;

const ValueText = styled(AnchorText)`
  color: ${Colors.OBSIDIAN};
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
    if (value && Array.isArray(value)) {
      return (
        <>
          {value.map(val => (
            <UITag
              key={val.value}
              closeable={true}
              onCloseClick={makeHandleDeselect(val.value)}
            >
              {val.text}
            </UITag>
          ))}
          <div style={{ flex: 1 }}> </div>
        </>
      );
    }

    if (value) {
      return (
        <ValueText>
          <UITruncateString>{value.text}</UITruncateString>
        </ValueText>
      );
    }

    return (
      <PlaceholderText>
        <UITruncateString>{placeholder}</UITruncateString>
      </PlaceholderText>
    );
  };

  return (
    <ButtonAnchor onClick={onClick}>
      <UIFlex align="center">
        <UIFlex align="center" wrap="wrap" style={{ flex: 1 }}>
          {renderSelected()}
        </UIFlex>
        <UIFlex direction="column" justify="center">
          {renderedIconRight}
        </UIFlex>
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
