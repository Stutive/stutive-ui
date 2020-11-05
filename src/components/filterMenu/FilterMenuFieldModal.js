import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UIButton from '../../UIComponents/buttons/UIButton';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UIModal from '../../UIComponents/dialog/UIModal';
import UIListSelect from '../../UIComponents/inputs/UIListSelect';

const EMPTY_FUNCTION = () => {};

const FilterMenuFieldModal = ({
  closeModal = EMPTY_FUNCTION,
  options,
  title,
  multi = false,
  onChange = EMPTY_FUNCTION,
  searchable = false,
  show
}) => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const handleChange = value => setSelectedOptions(value);

  const handleSubmit = () => {
    onChange(selectedOptions);
    closeModal();
  };

  return (
    <UIModal onClickOutside={closeModal} show={show}>
      <UIModal.Header>
        <h5>{title}</h5>
        <UIModal.CloseButton onClick={closeModal} />
      </UIModal.Header>
      <UIModal.Body>
        <div className="pt-3 pb-3">
          <UIListSelect
            multi={multi}
            onChange={handleChange}
            options={options}
            searchable={searchable}
          />
        </div>
      </UIModal.Body>
      <UIModal.Footer>
        <UIFlex justify="flex-end">
          <UIButton onClick={handleSubmit}>Show Results</UIButton>
        </UIFlex>
      </UIModal.Footer>
    </UIModal>
  );
};

FilterMenuFieldModal.propTypes = {
  closeModal: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  show: PropTypes.bool.isRequired
};

export default FilterMenuFieldModal;
