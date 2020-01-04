import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import useHandleClickOutside from '../lib/useHandleClickOutside';

import * as Colors from '../StyleTokens/colors';

import UIIcon from '../icon/UIIcon';
import UISelectDropdown from './internal/UISelectDropdown';
import UISelectButtonAnchor from './internal/UISelectButtonAnchor';
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

const initializeSelectedOptions = (options, value, multi) => {
  if (!value) {
    return null;
  }

  if (multi) {
    return value.map(val => ({
      text: (getOptionFromValue(options, val) || {}).text,
      value: val
    }));
  } else {
    return {
      text: (getOptionFromValue(options, value) || {}).text,
      value
    };
  }
};

const UISelect = ({
  anchorType = 'button',
  multi = false,
  onChange = EMPTY_FUNCTION,
  options = [],
  placeholder = null,
  searchable = false,
  value = null,
  ...props
}) => {
  /*  Dropdown  */
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowDropdown = () => setShowDropdown(true);
  const handleHideDropdown = () => setShowDropdown(false);
  const handleToggleShowDropdown = () => {
    if (showDropdown) {
      handleHideDropdown();
    } else {
      handleShowDropdown();
    }
  };

  /*  Query */
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

  /*  Selected Options  */
  const initial = initializeSelectedOptions(options, value, multi);
  const [selectedOptions, setSelectedOptions] = useState(initial);
  const handleSelect = value => {
    const option = getOptionFromValue(options, value);
    if (multi) {
      const newSelectedOptions = (selectedOptions || []).concat([option]);
      onChange(newSelectedOptions.map(option => option.value));
      setSelectedOptions(newSelectedOptions);
    } else {
      setSelectedOptions(option);
      onChange(value);
      if (anchorType === 'input') {
        setQuery(option.text);
      }
      handleHideDropdown();
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
  const handleSelectClear = e => {
    onChange(multi ? [] : null);
    setSelectedOptions(null);
    if (showDropdown) {
      setShowDropdown(false);
    }
    e.stopPropagation();
  };

  const getIconRight = () => {
    let iconProps = {
      color: Colors.OZ,
      size: 'small'
    };

    if (selectedOptions !== null) {
      return (
        <UIIcon
          {...iconProps}
          name="fas fa-times"
          onClick={handleSelectClear}
        />
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
        value={selectedOptions}
        onClick={handleToggleShowDropdown}
        onDeselect={handleDeselect}
        iconRight={getIconRight(anchorType, showDropdown)}
      />
    );

  const wrapperRef = useRef(null);
  useHandleClickOutside(wrapperRef, handleHideDropdown);
  return (
    <div ref={wrapperRef} style={{ position: 'relative' }} {...props}>
      {renderedAnchor}
      <div style={{ position: 'relative' }}>
        <UISelectDropdown
          multi={multi}
          options={options}
          onSelect={handleSelect}
          onDeselect={handleDeselect}
          searchable={searchable && anchorType !== 'input'}
          selectedOptions={selectedOptions}
          show={showDropdown}
          withQuery={query}
        />
      </div>
    </div>
  );
};

UISelect.propTypes = {
  anchorType: PropTypes.oneOf(['input', 'button']),
  multi: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  searchable: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

export default UISelect;
