import React, { useState } from 'react';

import UIContainer from '../containers/UIContainer';
import UIReplacableText from './UIReplacableText';
export default {
  component: UIReplacableText,
  title: 'UIReplacableText'
};

export const Empty = () => {
  const [value, setValue] = useState('edit this text');
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <h1>Hello world</h1>
      <UIReplacableText value={value} onChange={v => setValue(v)} />
      <h1>Hello world</h1>
    </UIContainer>
  );
};
