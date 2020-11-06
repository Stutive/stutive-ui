import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UIIcon from '../../UIComponents/icon/UIIcon';
import UIScrollContainer from '../../UIComponents/containers/UIScrollContainer';
import UITag from '../../UIComponents/tag/UITag';
import UITextInput from '../../UIComponents/inputs/UITextInput';

import * as Colors from '../../UIComponents/StyleTokens/colors';

import FilterMenuFieldModal from './FilterMenuFieldModal';

const FilterMenuWrapper = styled.div`
  background-color: ${Colors.GYPSUM};
  width: 100%;
`;

const rightSearchIcon = (
  <UIIcon color={Colors.OZ} name="fas fa-search" size="small" />
);

const FilterMenu = ({
  value = {},
  options,
  onFieldChange,
  onKeywordChange = () => {}
}) => {
  const [showModal, setShowModal] = useState(false);
  const revealModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);

  const [activeField, setActiveField] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState(value);
  const addSelectedOption = option => {
    onFieldChange(option.field, option.value);
    const newSelectedOptions = {
      ...selectedOptions,
      [option.field]: option.value
    };
    setSelectedOptions(newSelectedOptions);
  };
  const removeSelectedOptions = option => {
    onFieldChange(option.field, null);
    const newSelectedOptions = {
      ...selectedOptions
    };
    delete newSelectedOptions[option.field];
    setSelectedOptions(newSelectedOptions);
  };

  const renderFields = () => {
    const activeFields = Object.keys(selectedOptions);
    return (options.fields || []).map(field => {
      const handleClick = () => {
        setActiveField(field);
        revealModal();
      };

      if (activeFields.includes(field.field)) {
        const handleCloseClick = () => {
          removeSelectedOptions(field);
        };
        return (
          <UITag
            key={field.field}
            closeable={true}
            onClick={handleClick}
            onCloseClick={handleCloseClick}
            size="large"
            use="success"
          >
            {field.text}
          </UITag>
        );
      }
      return (
        <UITag key={field.field} onClick={handleClick} size="large">
          {field.text}
        </UITag>
      );
    });
  };

  const renderModal = () => {
    if (!activeField) {
      return null;
    }

    const handleChange = value => {
      addSelectedOption({
        field: activeField.field,
        value
      });
    };

    return (
      <FilterMenuFieldModal
        show={showModal}
        closeModal={hideModal}
        options={activeField.options}
        title={activeField.placeholder}
        multi={activeField.multi}
        onChange={handleChange}
        searchable={activeField.searchable}
      />
    );
  };

  return (
    <FilterMenuWrapper>
      {renderModal()}
      <UITextInput
        placeholder="Search for courses..."
        iconRight={rightSearchIcon}
        onChange={onKeywordChange}
      />
      <UIScrollContainer className="pl-1 pr-1 pt-1 pb-2" direction="row">
        {renderFields()}
      </UIScrollContainer>
    </FilterMenuWrapper>
  );
};

FilterMenu.propTypes = {
  options: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onKeywordChange: PropTypes.func
};

export default FilterMenu;
