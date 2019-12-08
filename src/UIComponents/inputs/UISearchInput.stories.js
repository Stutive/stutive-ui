import React from 'react';

import UIContainer from '../containers/UIContainer';
import UISearchInput from './UISearchInput';

export default {
  component: UISearchInput,
  title: 'UISearchInput'
};

export const empty = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UISearchInput />
    </UIContainer>
  );
};

export const withSuggestions = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UISearchInput
        value={'123'}
        suggestions={['Suggestion 1', 'Suggestion 2', 'Suggestion 3']}
      />
    </UIContainer>
  );
};
