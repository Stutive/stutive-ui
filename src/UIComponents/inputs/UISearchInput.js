import React, { useState } from 'react';
import styled from 'styled-components';

import UICard from '../containers/UICard';
import UITextInput from './UITextInput';

const StyledDiv = styled.div`
  position: relative;
`;

const StyledUICard = styled(UICard)`
  width: 100%;
  margin-top: 1em;
`;

const Suggestion = styled.div`
  border-bottom: 1px solid #cccccc;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const UISearchInput = ({ onChange, suggestions, ...props }) => {
  const [value, setValue] = useState(props.value || '');

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const renderSuggestions = () => {
    if (!suggestions) {
      return 'No suggestions';
    }

    return suggestions.map(suggestion => <Suggestion>{suggestion}</Suggestion>);
  };

  const showSuggestions = value !== '';
  return (
    <StyledDiv {...props}>
      <UITextInput onChange={handleChange} value={value} />
      {showSuggestions && <StyledUICard>{renderSuggestions()}</StyledUICard>}
    </StyledDiv>
  );
};

export default UISearchInput;
