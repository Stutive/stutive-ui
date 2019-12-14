import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';

import useHandleClickOutside from '../lib/useHandleClickOutside';

import * as Tokens from '../../constants/tokens';

import UISelectDropdown from './UISelectDropdown';
import UIIcon from '../icon/UIIcon';
import UISelectButtonAnchor from './UISelectButtonAnchor';
import { UIUnwrappedTextInput } from './UITextInput';

const EMPTY_FUNCTION = () => {};

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

const UISearchInput = ({
  anchorType,
  onChange,
  options,
  placeholder,
  searchable,
  ...props
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowDropdown = () => {
    setShowDropdown(true);
  };
  const handleHideDropdown = () => {
    setShowDropdown(false);
  };
  const handleToggleShowDropdown = () => {
    if (showDropdown) {
      handleHideDropdown();
    } else {
      handleShowDropdown();
    }
  };

  const [query, setQuery] = useState(null);
  const handleChange = e => {
    const newQuery = e.target.value;
    if (query === '' && newQuery !== '') {
      handleShowDropdown();
    } else if (query !== '' && newQuery === '') {
      handleHideDropdown();
    }
    setQuery(newQuery);
  };
  const handleClear = () => setQuery('');

  const [selectedText, setSelectedText] = useState('');
  const handleSelect = value => {
    const option = getOptionFromValue(options, value);
    setSelectedText(option.text);
    onChange(value);
    handleHideDropdown();
    if (anchorType === 'input') {
      setQuery(option.text);
    }
  };
  const handleDeselect = () => {
    onChange(null);
    setSelectedText('');
  };

  const getIconRight = () => {
    let iconProps = {
      color: Tokens.CALYPSO,
      size: 'small'
    };

    if (selectedText !== '') {
      return (
        <UIIcon {...iconProps} name="fas fa-times" onClick={handleDeselect} />
      );
    }

    if (anchorType === 'input') {
      const name = query ? 'fas fa-times' : 'fas fa-search';
      const handleClick = query ? handleClear : EMPTY_FUNCTION;
      return <UIIcon {...iconProps} name={name} onClick={handleClick} />;
    }

    let name = showDropdown ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    return (
      <UIIcon {...iconProps} name={name} onClick={handleToggleShowDropdown} />
    );
  };

  const renderedAnchor =
    anchorType === 'input' ? (
      <UIUnwrappedTextInput
        autocomplete={'off'}
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        iconRight={getIconRight(anchorType, showDropdown)}
      />
    ) : (
      <UISelectButtonAnchor
        placeholder={placeholder}
        value={selectedText}
        onClick={handleToggleShowDropdown}
        iconRight={getIconRight(anchorType, showDropdown)}
      />
    );

  const wrapperRef = useRef(null);
  useHandleClickOutside(wrapperRef, handleHideDropdown);
  return (
    <div ref={wrapperRef} style={{ position: 'relative' }} {...props}>
      {renderedAnchor}
      <UISelectDropdown
        options={options}
        onSelect={handleSelect}
        searchable={searchable && anchorType !== 'input'}
        show={showDropdown}
        withQuery={query}
      />
    </div>
  );
};

UISearchInput.propTypes = {
  anchorType: PropTypes.oneOf(['input', 'button']),
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  searchable: PropTypes.bool
};

UISearchInput.defaultProps = {
  anchorType: 'button',
  onChange: () => {},
  placeholder: null,
  searchable: false
};

export default UISearchInput;
