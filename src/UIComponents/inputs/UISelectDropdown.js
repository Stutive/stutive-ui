import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';

import UISelectOption from './UISelectOption';
import { UIUnwrappedTextInput } from './UITextInput';
import UIIcon from '../icon/UIIcon';

import * as Tokens from '../../constants/tokens';

const EMPTY_FUNCTION = () => {};

const DropdownCard = styled(Card)`
  z-index: ${Tokens.SIEBEL_LAYER};
  position: absolute;
  top: 3em;
  left: 0;
  width: 100%;
  padding: 0;
`;

const HeaderWrapper = styled.div`
  background-color: ${Tokens.GYPSUM};
`;

const HeaderTitleWrapper = styled(HeaderWrapper)`
  color: ${Tokens.OBSIDIAN} !important;
  padding: 0.3em 0.5em;
  font-weight: 500;
`;

const SearchInputWrapper = styled(HeaderWrapper)`
  padding: 0.5rem;
`;

const UISelectDropdown = ({
  dropdownHeaderTitle = null,
  options = [],
  searchable = false,
  onSelect = EMPTY_FUNCTION
}) => {
  const makeHandleSelect = value => () => onSelect(value);

  const [focusedOption, setFocusedOption] = useState(null);
  const makeHandleFocus = value => () => {
    setFocusedOption(value);
  };

  const renderedHeader = dropdownHeaderTitle && (
    <HeaderTitleWrapper>{dropdownHeaderTitle}</HeaderTitleWrapper>
  );
  const renderedSearchInput = searchable && (
    <SearchInputWrapper>
      <UIUnwrappedTextInput
        iconRight={props => (
          <UIIcon name="fas fa-search" size="small" {...props} />
        )}
      />
    </SearchInputWrapper>
  );

  const renderedOptions = options.map(option => {
    const { value } = option;

    const handleFocus = makeHandleFocus(value);
    const handleSelect = makeHandleSelect(value);
    const handleClick = () => {
      handleFocus();
      handleSelect();
    };
    const isFocused = value === focusedOption;

    return (
      <UISelectOption
        key={value}
        onClick={handleClick}
        onMouseEnter={handleFocus}
        focused={isFocused}
        {...option}
      />
    );
  });

  if (options.length === 0 && !renderedHeader && !renderedSearchInput) {
    //  TODO: render something when there are no available options
    return null;
  }

  return (
    <DropdownCard>
      {[renderedHeader, renderedSearchInput, renderedOptions]}
    </DropdownCard>
  );
};

UISelectDropdown.propTypes = {
  dropdownHeaderTitle: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      text: PropTypes.string
    })
  ),
  searchable: PropTypes.bool,
  onSelect: PropTypes.func
};

export default UISelectDropdown;
