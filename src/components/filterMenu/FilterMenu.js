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

const FilterMenu = ({ options, onChange }) => {
  const [showModal, setShowModal] = useState(false);
  const revealModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);

  const [activeField, setActiveField] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const addSelectedOption = option => {
    const newSelectedOptions = [...selectedOptions, option];
    onChange(newSelectedOptions);
    setSelectedOptions(newSelectedOptions);
  };
  const removeSelectedOptions = option => {
    const idx = selectedOptions.findIndex(opt => opt.field === option.field);
    const newSelectedOptions = [
      ...selectedOptions.slice(0, idx),
      ...selectedOptions.slice(idx + 1)
    ];
    onChange(newSelectedOptions);
    setSelectedOptions(newSelectedOptions);
  };

  const renderFields = () => {
    const activeFields = selectedOptions.map(option => option.field);
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
            size="medium"
            use="success"
          >
            {field.text}
          </UITag>
        );
      }
      return (
        <UITag key={field.field} onClick={handleClick} size="medium">
          {field.text}
        </UITag>
      );
    });
  };

  const renderModal = () => {
    if (!showModal) {
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
        closeModal={hideModal}
        options={activeField.options}
        title={activeField.placeholder}
        multi={activeField.multi}
        onChange={handleChange}
      />
    );
  };

  return (
    <FilterMenuWrapper>
      {renderModal()}
      <UITextInput
        placeholder="Search for courses..."
        iconRight={rightSearchIcon}
      />
      <UIScrollContainer className="pl-1 pr-1 pt-1 pb-2" direction="row">
        {renderFields()}
      </UIScrollContainer>
    </FilterMenuWrapper>
  );
};

FilterMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired
};

export default FilterMenu;
