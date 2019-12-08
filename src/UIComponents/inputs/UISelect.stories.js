import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../containers/UIContainer';
import UISelect from './UISelect';

export default {
  component: UISelect,
  title: 'UISelect'
};

export const empty = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UISelect />
    </UIContainer>
  );
};

export const withOptions = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UISelect
        onSelectedOptionChange={action('onSelectedOptionChange')}
        options={[
          {
            text: 'Suggestion 1',
            value: 'suggestion-1'
          },
          {
            text: 'Suggestion 2',
            value: 'suggestion-2'
          },
          {
            text: 'Suggestion 3',
            value: 'suggestion-3'
          }
        ]}
        value={'123'}
      />
    </UIContainer>
  );
};

export const withoutOptions = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UISelect
        onSelectedOptionChange={action('onSelectedOptionChange')}
        options={[]}
        value={'123'}
      />
    </UIContainer>
  );
};
