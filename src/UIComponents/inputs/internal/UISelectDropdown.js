import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';

import UISelectOption from './UISelectOption';
import { UIUnwrappedTextInput } from '../UITextInput';
import UIIcon from '../../icon/UIIcon';
import UIScrollContainer from '../../containers/UIScrollContainer';

import * as Colors from '../../StyleTokens/colors';
import { SIEBEL_LAYER } from '../../StyleTokens/sizes';

const EMPTY_FUNCTION = () => {};

const DropdownCard = styled(Card)`
  z-index: ${SIEBEL_LAYER};
  position: absolute;
  top: 0.5em;
  left: 0;
  width: 100%;
  padding: 0;
`;

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

const UISelectDropdown = ({
  dropdownHeaderTitle = null,
  multi = false,
  options = [],
  searchable = false,
  onSelect = EMPTY_FUNCTION,
  onDeselect = EMPTY_FUNCTION,
  selectedOptions,
  withQuery = null,
  show
}) => {
  const makeHandleSelect = value => () => onSelect(value);
  const makeHandleDeselect = value => () => onDeselect(value);

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
    return (
      <UIScrollContainer style={{ maxHeight: '300px' }}>
        {renderedOptions}
      </UIScrollContainer>
    );
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
