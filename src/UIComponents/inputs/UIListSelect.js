import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';

import UISelectOption from './internal/UISelectOption';
import { UIUnwrappedTextInput } from './UITextInput';
import UIIcon from '../icon/UIIcon';

import * as Colors from '../StyleTokens/colors';

const EMPTY_FUNCTION = () => {};

const HeaderWrapper = styled.div`
  background-color: ${Colors.GYPSUM};
`;

const HeaderTitleWrapper = styled(HeaderWrapper)`
  color: ${Colors.OBSIDIAN} !important;
  padding: 0.3em 0.5em;
  font-weight: 500;
`;

const SearchInputWrapper = styled(HeaderWrapper)`
  padding: 0.5rem;
`;

const selectedOptionsHasValue = (options, value) => {
  return (options || []).find(option => option.value === value);
};

const getOptionFromValue = (options, value) => {
  let option = null;
  options.forEach(_option => {
    if (_option.value === value) {
      option = _option;
    }
    return;
  });
  return option;
};

const UISelectDropdown = ({
  dropdownHeaderTitle = null,
  multi = false,
  options = [],
  searchable = false,
  onChange = EMPTY_FUNCTION,
  withQuery = null
}) => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const handleSelect = value => {
    const option = getOptionFromValue(options, value);
    if (multi) {
      const newSelectedOptions = (selectedOptions || []).concat([option]);
      onChange(newSelectedOptions.map(option => option.value));
      setSelectedOptions(newSelectedOptions);
    } else {
      setSelectedOptions(option);
      onChange(value);
    }
  };
  const handleDeselect = value => {
    if (multi) {
      const option = getOptionFromValue(options, value);
      const idx = selectedOptions.findIndex(opt => opt.value === option.value);
      const newSelectedOptions = [
        ...selectedOptions.slice(0, idx),
        ...selectedOptions.slice(idx + 1)
      ];
      onChange(newSelectedOptions);
      setSelectedOptions(newSelectedOptions);
    } else {
      onChange(null);
      setSelectedOptions(null);
    }
  };
  const makeHandleSelect = value => () => handleSelect(value);
  const makeHandleDeselect = value => () => handleDeselect(value);

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
        color={Colors.OZ}
        name="fas fa-times"
        size="small"
        onClick={handleClear}
      />
    ) : (
      <UIIcon color={Colors.OZ} name="fas fa-search" size="small" />
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

        let isFocused = false;
        if (multi) {
          isFocused = selectedOptionsHasValue(selectedOptions, value);
        } else {
          isFocused = selectedOptions === value;
        }
        const handleDeselect = makeHandleDeselect(value);
        const handleSelect = makeHandleSelect(value);
        const handleClick = () => {
          if (isFocused) {
            handleDeselect();
          } else {
            handleSelect();
          }
        };

        return (
          <UISelectOption
            key={value}
            onClick={handleClick}
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

  return <Card>{[renderedHeader, renderedSearchInput, renderOptions()]}</Card>;
};

UISelectDropdown.propTypes = {
  dropdownHeaderTitle: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      text: PropTypes.string
    })
  ),
  searchable: PropTypes.bool
};

export default UISelectDropdown;
