import React, { useState } from 'react';

import UIButton from '../../UIComponents/buttons/UIButton';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UIFormControl from '../../UIComponents/form/UIFormControl';
import UIModal from '../../UIComponents/dialog/UIModal';
import UITextInput from '../../UIComponents/inputs/UITextInput';

import { ENTER } from '../../constants/KeyCodes';

const AddSemesterModal = ({ show, onAdd, onCancel }) => {
  const [semesterTitle, setSemesterTitle] = useState('');

  const handleChange = e => {
    setSemesterTitle(e.target.value);
  };
  const handleKeyDown = e => {
    if (e.keyCode === ENTER) {
      handleAdd();
    }
  };

  const handleAdd = () => {
    // TODO: Handle empty validation
    onAdd(semesterTitle === '' ? 'untitled' : semesterTitle);
  };

  return (
    <UIModal show={show} onClickOutside={onCancel}>
      <UIModal.Header>
        <h2>Add Semester</h2>
        <UIModal.CloseButton onClick={onCancel} />
      </UIModal.Header>
      <UIModal.Body>
        <UIFormControl label="Semester title">
          <UITextInput
            placeholder="ex. Fall 2020"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
        </UIFormControl>
      </UIModal.Body>
      <UIModal.Footer>
        <UIFlex justify="flex-end">
          <UIButton use="secondary" onClick={onCancel}>
            Cancel Add
          </UIButton>
          <UIButton onClick={handleAdd}>Add Semester</UIButton>
        </UIFlex>
      </UIModal.Footer>
    </UIModal>
  );
};

export default AddSemesterModal;
