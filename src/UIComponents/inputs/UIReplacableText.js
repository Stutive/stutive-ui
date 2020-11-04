import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UIIcon from '../icon/UIIcon';
import { UIUnwrappedTextInput } from './UITextInput';
import { CALYPSO, OBSIDIAN } from '../StyleTokens/colors';

import useHandleClickOutside from '../lib/useHandleClickOutside';
import { ENTER } from '../../constants/KeyCodes';

const ReplacableTextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3em;
`;

const EditIcon = ({ isEditing }) => {
  const [iconHovered, setIconHovered] = useState(false);
  if (isEditing) {
    return null;
  }

  return (
    <UIIcon
      className="pl-2"
      color={iconHovered ? CALYPSO : OBSIDIAN}
      name="fas fa-edit"
      onMouseEnter={() => setIconHovered(true)}
      onMouseLeave={() => setIconHovered(false)}
      onClick={() => setIconHovered(false)}
      size="small"
    />
  );
};

const UIReplacableText = ({ value = '', onChange = () => {} }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);
  const enterEditing = () => setIsEditing(true);
  const onExitEditing = () => {
    setIsEditing(false);
    if (value !== newValue) {
      onChange(newValue);
    }
  };
  const handleKeyDown = e => {
    if (e.keyCode === ENTER) {
      onExitEditing();
    }
  };

  const containerRef = useRef(null);
  useHandleClickOutside(containerRef, onExitEditing);
  return (
    <ReplacableTextContainer
      align="center"
      ref={containerRef}
      onClick={enterEditing}
    >
      {!isEditing && <span>{value}</span>}
      {isEditing && (
        <UIUnwrappedTextInput
          defaultValue={value}
          onChange={e => setNewValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      )}
      <EditIcon isEditing={isEditing} />
    </ReplacableTextContainer>
  );
};

UIReplacableText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default UIReplacableText;
