import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';

import useHandleClickOutside from '../lib/useHandleClickOutside';

import * as Tokens from '../../constants/tokens';
import UISelectOptions from './UISelectOptions';

const ButtonAnchor = styled(Button)`
  width: 100%;
  height: 2.3rem;
  color: ${Tokens.OBSIDIAN};
  text-align: left;
  background-color: ${Tokens.GYPSUM};
  border: 1px solid ${Tokens.BATTLESHIP};
  &:hover {
    background-color: ${Tokens.GYPSUM};
    border: 2px solid ${Tokens.BATTLESHIP};
    color: ${Tokens.OBSIDIAN};
  }
  &:active {
    background-color: ${Tokens.GYPSUM} !important;
    border: 2px solid ${Tokens.CALYPSO} !important;
    color: ${Tokens.OBSIDIAN} !important;
  }
  &:focus {
    background-color: ${Tokens.GYPSUM} !important;
    color: ${Tokens.OBSIDIAN};
  }
`;

const InputAnchor = styled.input`
  width: 100%;
  border-radius: 0.3rem;
  border: 2px solid ${Tokens.BATTLESHIP};
  padding: 0.2rem 0.4rem;
  &:focus {
    border: 2px solid ${Tokens.CALYPSO_MEDIUM};
    outline: none !important;
  }
`;

const getTextFromValue = (options, value) => {
  let text = null;
  (options || []).forEach(option => {
    if (option.value === value) {
      text = option.text;
      return;
    }
  });
  return text;
};

const UISearchInput = ({
  anchorType,
  onChange,
  options,
  placeholder,
  searchable,
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = e => setSearchQuery(e.target.value);

  const [value, setValue] = useState(null);
  const makeHandleOptionSelect = value => () => {
    onChange(value);
    setValue(value);
    setSearchQuery(getTextFromValue(options, value));
    handleHideOptions();
  };

  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = () => {
    setShowOptions(true);
  };
  const handleHideOptions = () => {
    setShowOptions(false);
  };
  const handleToggleOptions = () => {
    if (showOptions) {
      handleHideOptions();
    } else {
      handleShowOptions();
    }
  };

  const [highlightedValue, setHighlightedValue] = useState({
    value: null,
    index: null
  });
  const makeHandleOptionHighlight = (value, index) => () => {
    setHighlightedValue({
      value,
      index
    });
  };

  const renderOptions = () => (
    <UISelectOptions
      anchorType={anchorType}
      options={options}
      handleSearchChange={handleSearchChange}
      highlightedValue={highlightedValue}
      makeHandleOptionHighlight={makeHandleOptionHighlight}
      makeHandleOptionSelect={makeHandleOptionSelect}
      searchable={searchable}
      searchQuery={searchQuery}
      showOptions={showOptions}
    />
  );

  const wrapperRef = useRef(null);
  useHandleClickOutside(wrapperRef, handleHideOptions);
  const selectedOptionText = getTextFromValue(options, value);
  return (
    <div ref={wrapperRef} style={{ position: 'relative' }} {...props}>
      {anchorType === 'input' && (
        <InputAnchor
          onChange={handleSearchChange}
          onFocus={handleShowOptions}
          value={searchQuery}
        />
      )}
      {anchorType === 'button' && (
        <ButtonAnchor onClick={handleToggleOptions}>
          {selectedOptionText || placeholder}
        </ButtonAnchor>
      )}
      {renderOptions()}
    </div>
  );
};

UISearchInput.propTypes = {
  anchorType: PropTypes.oneOf(['input', 'button']),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  searchable: PropTypes.bool
};

UISearchInput.defaultProps = {
  anchorType: 'button',
  placeholder: null,
  searchable: false
};

export default UISearchInput;
