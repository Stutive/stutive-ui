import React from 'react';

import UIContainer from '../containers/UIContainer';
import UITextInput from './UITextInput';
import UIIcon from '../icon/UIIcon';

import * as Colors from '../StyleTokens/colors';

export default {
  component: UITextInput,
  title: 'UITextInput'
};

export const empty = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UITextInput />
      <UITextInput iconRight="fas fa-search" />
      <UITextInput iconRight={<UIIcon size="small" color={Colors.CALYPSO} />} />
    </UIContainer>
  );
};
