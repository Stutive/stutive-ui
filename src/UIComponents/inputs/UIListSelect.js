import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UISelectDropdown from './internal/UISelectDropdown';

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

const UIListSelect = ({
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
  return (
    <UISelectDropdown
      multi={multi}
      options={options}
      onSelect={handleSelect}
      onDeselect={handleDeselect}
      selectedOptions={selectedOptions}
      show={true}
      asListSelect={true}
      searchable={searchable}
    />
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
  searchable: PropTypes.bool
};

export default UIListSelect;
