import React from 'react';

import UIContainer from '../containers/UIContainer';
import UITextInput from './UITextInput';

export default {
  component: UITextInput,
  title: 'UITextInput'
};

export const empty = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UITextInput />
    </UIContainer>
  );
};
