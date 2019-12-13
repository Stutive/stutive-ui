import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';

import * as Tokens from '../../constants/tokens';

const OptionsCard = styled(Card)`
  z-index: ${Tokens.SIEBEL_LAYER};
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

const SearchOption = styled.div`
  background-color: ${Tokens.KOALA};
  padding: 0.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 0.3rem;
  border: 2px solid ${Tokens.BATTLESHIP};
  padding: 0.2rem 0.4rem;
  &:focus {
    border: 2px solid ${Tokens.CALYPSO_MEDIUM};
    outline: none !important;
  }
`;

const selectedStyling = {
  backgroundColor: Tokens.CALYPSO_LIGHT
};

const UISelectOptions = ({
  anchorType,
  handleSearchChange,
  highlightedValue,
  makeHandleOptionHighlight,
  makeHandleOptionSelect,
  options,
  searchable,
  searchQuery,
  showOptions
}) => {
  if (!showOptions) {
    return null;
  }

  const renderOptions = () => {
    if (!options || options.length === 0) {
      return <Option>No options.</Option>;
    }

    //  TODO(Alpri): Throttle search input
    const searchOption = searchable && anchorType !== 'input' && (
      <SearchOption key="search-option">
        <SearchInput
          autoFocus={true}
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </SearchOption>
    );
    const loweredSearchQuery = searchQuery.toLowerCase();
    const userOptions = options
      .filter(option => {
        if (!searchable) return true;

        const { value, text } = option;
        return (
          value.toLowerCase().includes(loweredSearchQuery) ||
          text.toLowerCase().includes(loweredSearchQuery)
        );
      })
      .map(option => {
        const isSelectedOption = highlightedValue === option.value;
        return (
          <Option
            key={option.value}
            onClick={makeHandleOptionSelect(option.value)}
            onMouseEnter={makeHandleOptionHighlight(option.value)}
            style={isSelectedOption ? selectedStyling : {}}
          >
            {option.text}
          </Option>
        );
      });
    return [
      searchOption,
      ...userOptions,
      userOptions.length === 0 && <Option>No options.</Option>
    ];
  };

  return <OptionsCard>{renderOptions()}</OptionsCard>;
};

UISelectOptions.propTypes = {
  anchorType: PropTypes.oneOf(['input', 'button']),
  handleSearchChange: PropTypes.func,
  highlightedValue: PropTypes.object,
  makeHandleOptionHighlight: PropTypes.func,
  makeHandleOptionSelect: PropTypes.func,
  options: PropTypes.array,
  searchQuery: PropTypes.string,
  showOptions: PropTypes.bool,
  searchable: PropTypes.bool
};

export default UISelectOptions;
