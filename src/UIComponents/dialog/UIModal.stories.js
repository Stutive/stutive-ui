import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../containers/UIContainer';
import UIModal from './UIModal';
import UIList from '../list/UIList';

export default {
  component: UIModal,
  title: 'UIModal'
};

export const usage = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <h5>Unstyled Unordered</h5>
      <UIModal show={true}>
        <UIModal.Header>
          <h2>This is a modal.</h2>
        </UIModal.Header>
        <UIModal.Body>
          <UIList>
            <span>List Item 1</span>
            <span>List Item 2</span>
            <span>List Item 3</span>
            <span>List Item 4</span>
          </UIList>
        </UIModal.Body>
      </UIModal>
      <UIList>
        <span>List Item 1</span>
        <span>List Item 2</span>
        <span>List Item 3</span>
        <span>List Item 4</span>
      </UIList>
    </UIContainer>
  );
};

export const withCloseButton = () => (
  <UIContainer style={{ paddingTop: '2em' }}>
    <h5>Unstyled Unordered</h5>
    <UIModal show={true}>
      <UIModal.Header>
        <h2>This is a modal.</h2>
        <UIModal.CloseButton onClick={action('Close')} />
      </UIModal.Header>
      <UIModal.Body>
        <UIList>
          <span>List Item 1</span>
          <span>List Item 2</span>
          <span>List Item 3</span>
          <span>List Item 4</span>
        </UIList>
      </UIModal.Body>
    </UIModal>
    <UIList>
      <span>List Item 1</span>
      <span>List Item 2</span>
      <span>List Item 3</span>
      <span>List Item 4</span>
    </UIList>
  </UIContainer>
);
