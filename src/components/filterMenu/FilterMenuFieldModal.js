import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UIButton from '../../UIComponents/buttons/UIButton';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UIModal from '../../UIComponents/dialog/UIModal';
import UIListSelect from '../../UIComponents/inputs/UIListSelect';
import UIScrollContainer from '../../UIComponents/containers/UIScrollContainer';

const EMPTY_FUNCTION = () => {};

const FilterMenuFieldModal = ({
  closeModal = EMPTY_FUNCTION,
  options,
  title,
  multi = false,
  onChange = EMPTY_FUNCTION,
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
        <div className="pt-4 pb-3">
          <UIScrollContainer style={{ maxHeight: '300px' }}>
            <UIListSelect
              multi={multi}
              onChange={handleChange}
              options={options}
            />
          </UIScrollContainer>
        </div>
      </UIModal.Body>
      <UIModal.Footer>
        <UIFlex justify="end">
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
  show: PropTypes.bool.isRequired
};

export default FilterMenuFieldModal;
