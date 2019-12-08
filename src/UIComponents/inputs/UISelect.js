import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';
import UITextInput from './UITextInput';

import { CALYPSO_LIGHT } from '../../constants/tokens';
import { emptyFunction } from '../../constants/Utils';
import * as KEY from '../../constants/KeyCodes';

const StyledDiv = styled.div`
  position: relative;
`;

const StyledCard = styled(Card)`
  width: 100%;
  margin-top: 1em;
  padding: 0;
`;

const Option = styled.div`
  border-bottom: 1px solid #cccccc;
  padding: 0.6em 1.5em;
`;

const selectedStyling = {
  backgroundColor: CALYPSO_LIGHT
};

const UISearchInput = ({
  onChange,
  onSelectedOptionChange,
  options,
  valueAsOption,
  ...props
}) => {
  const [value, setValue] = useState(props.value || '');
  const [selectedValue, setSelectedValue] = useState({});

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleClick = () => {
    onSelectedOptionChange(selectedValue.value);
  };

  const handleKeyDown = e => {
    switch (e.keyCode) {
      case KEY.UP_ARROW: {
        const newIndex =
          selectedValue.index - 1 >= 0
            ? selectedValue.index - 1
            : options.length - 1;
        setSelectedValue({
          value: options[newIndex].value,
          index: newIndex
        });
        return;
      }
      case KEY.DOWN_ARROW: {
        const newIndex = (selectedValue.index + 1) % options.length;
        setSelectedValue({
          value: options[newIndex].value,
          index: newIndex
        });
        return;
      }
      case KEY.ENTER: {
        onSelectedOptionChange(selectedValue.value);
        return;
      }
      default: {
        return;
      }
    }
  };

  const makeHandleMouseEnter = (value, index) => () => {
    setSelectedValue({
      value,
      index
    });
  };

  const renderOptions = () => {
    if (!options || options.length === 0) {
      return <Option>No suggestions</Option>;
    }

    return options.map((option, i) => (
      <Option
        key={option.value}
        onClick={handleClick}
        onMouseEnter={makeHandleMouseEnter(option.value, i)}
        style={selectedValue.value === option.value ? selectedStyling : {}}
      >
        {option.text}
      </Option>
    ));
  };

  const showOptions = value !== '';
  return (
    <StyledDiv onKeyDown={handleKeyDown} {...props}>
      <UITextInput onChange={handleChange} value={value} />
      {showOptions && <StyledCard>{renderOptions()}</StyledCard>}
    </StyledDiv>
  );
};

UISearchInput.propTypes = {
  onChange: PropTypes.func,
  onSelectedOptionChange: PropTypes.func,
  options: PropTypes.array,
  valueAsOption: PropTypes.bool
};

UISearchInput.defaultProps = {
  onChange: emptyFunction,
  onSelectedOptionChange: emptyFunction,
  valueAsOption: false
};

export default UISearchInput;
