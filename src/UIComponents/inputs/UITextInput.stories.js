import React from 'react';

import UIContainer from '../containers/UIContainer';
import UITextInput from './UITextInput';
import UIIcon from '../icon/UIIcon';

import * as Tokens from '../../constants/tokens';

export default {
  component: UITextInput,
  title: 'UITextInput'
};

export const empty = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UITextInput />
      <UITextInput iconRight="fas fa-search" />
      <UITextInput iconRight={<UIIcon size="small" color={Tokens.CALYPSO} />} />
    </UIContainer>
  );
};
