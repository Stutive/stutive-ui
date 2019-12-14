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
  onSelect = EMPTY_FUNCTION,
  withQuery = null,
  show
}) => {
  const makeHandleSelect = value => () => onSelect(value);

  const [focusedOption, setFocusedOption] = useState(null);
  const makeHandleFocus = value => () => {
    setFocusedOption(value);
  };

  const [query, setQuery] = useState('');
  const handleChange = e => setQuery(e.target.value);
  const handleClear = () => {
    setQuery('');
  };

  const renderedHeader = dropdownHeaderTitle && (
    <HeaderTitleWrapper>{dropdownHeaderTitle}</HeaderTitleWrapper>
  );

  const getSearchInputRightIcon = () => {
    return query ? (
      <UIIcon
        color={Tokens.CALYPSO}
        name="fas fa-times"
        size="small"
        onClick={handleClear}
      />
    ) : (
      <UIIcon color={Tokens.CALYPSO} name="fas fa-search" size="small" />
    );
  };
  const renderedSearchInput = searchable && (
    <SearchInputWrapper>
      <UIUnwrappedTextInput
        onChange={handleChange}
        value={query}
        iconRight={getSearchInputRightIcon()}
      />
    </SearchInputWrapper>
  );

  const renderOptions = () => {
    const loweredQuery =
      (withQuery && withQuery.toLowerCase()) || query.toLowerCase();
    let renderedOptions = options
      .filter(option => {
        if (!loweredQuery || loweredQuery.length === 0) {
          return true;
        }

        return (
          (option.text || '').toLowerCase().includes(loweredQuery) ||
          (option.value || '').toLowerCase().includes(loweredQuery)
        );
      })
      .map(option => {
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
    if (renderedOptions.length === 0) {
      renderedOptions = <UISelectOption key="no-options" text="No results" />;
    }
    return renderedOptions;
  };

  if (!show) return null;

  return (
    <DropdownCard>
      {[renderedHeader, renderedSearchInput, renderOptions()]}
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
