import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import useHandleClickOutside from '../lib/useHandleClickOutside';

import * as Tokens from '../../constants/tokens';

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

const OptionsCard = styled(Card)`
  position: absolute;
  top: 3em;
  left: 0;
  width: 100%;
  padding: 0;
`;

const Option = styled.div`
  border-bottom: 1px solid #cccccc;
  padding: 0.6em 1.5em;
`;

const selectedStyling = {
  backgroundColor: Tokens.CALYPSO_LIGHT
};

const UISearchInput = ({ onChange, options, placeholder, ...props }) => {
  const [value, setValue] = useState(null);

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

  const [selectedValue, setSelectedValue] = useState({
    value: null,
    index: null
  });

  const makeHandleOptionSelect = value => () => {
    onChange(value);
    setValue(value);
    handleHideOptions();
  };

  const makeHandleOptionHighlight = (value, index) => () => {
    setSelectedValue({
      value,
      index
    });
  };

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

  const renderAnchor = () => {
    const selectedOptionText = getTextFromValue(options, value);
    return (
      <ButtonAnchor onClick={handleToggleOptions}>
        {selectedOptionText || placeholder}
      </ButtonAnchor>
    );
  };

  const renderOptions = () => {
    if (!options || options.length === 0) {
      return <Option>No options.</Option>;
    }

    return options.map((option, i) => {
      const isSelectedOption = selectedValue.value === option.value;
      return (
        <Option
          key={option.value}
          onClick={makeHandleOptionSelect(option.value)}
          onMouseEnter={makeHandleOptionHighlight(option.value, i)}
          style={isSelectedOption ? selectedStyling : {}}
        >
          {option.text}
        </Option>
      );
    });
  };

  const wrapperRef = useRef(null);
  useHandleClickOutside(wrapperRef, handleHideOptions);
  return (
    <div ref={wrapperRef} style={{ position: 'relative' }} {...props}>
      {renderAnchor()}
      {showOptions && <OptionsCard>{renderOptions()}</OptionsCard>}
    </div>
  );
};

UISearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string
};

UISearchInput.defaultProps = {
  placeholder: null
};

export default UISearchInput;
