import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../containers/UIContainer';
import UIFormControl from './UIFormControl';
import UITextInput from '../inputs/UITextInput';

export default {
  component: UIFormControl,
  title: 'UIFormControl'
};

export const basicUsage = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UIFormControl help="The name given to you at birth" label="First name">
        <UITextInput />
      </UIFormControl>
      <UIFormControl label="Last name">
        <UITextInput />
      </UIFormControl>
      <UIFormControl help="Where you live" label="Address">
        <UITextInput />
      </UIFormControl>
      <UIFormControl help="The number I should call" label="Phone Number">
        <UITextInput />
      </UIFormControl>
    </UIContainer>
  );
};
