import React from 'react';

import UIContainer from '../containers/UIContainer';
import UIList from './UIList';

export default {
  component: UIList,
  title: 'UIList'
};

export const listStyles = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <h5>Unstyled Unordered</h5>
      <UIList>
        <span>List Item 1</span>
        <span>List Item 2</span>
        <span>List Item 3</span>
        <span>List Item 4</span>
      </UIList>
      <h5>Unstyled Unordered with childClassName</h5>
      <UIList childClassName="mb-3">
        <span>List Item 1</span>
        <span>List Item 2</span>
        <span>List Item 3</span>
        <span>List Item 4</span>
      </UIList>
      <h5>Styled Unordered</h5>
      <UIList styled={true}>
        <span>List Item 1</span>
        <span>List Item 2</span>
        <span>List Item 3</span>
        <span>List Item 4</span>
      </UIList>
      <h5>Styled Ordered</h5>
      <UIList ordered={true}>
        <span>List Item 1</span>
        <span>List Item 2</span>
        <span>List Item 3</span>
        <span>List Item 4</span>
      </UIList>
    </UIContainer>
  );
};
