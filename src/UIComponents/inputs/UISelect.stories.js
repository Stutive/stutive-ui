import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../containers/UIContainer';
import UISelect from './UISelect';

export default {
  component: UISelect,
  title: 'UISelect'
};

export const basicUsage = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UISelect
        onChange={action('onChange')}
        options={[
          { text: 'One', value: '1' },
          { text: 'Two', value: '2' },
          { text: 'Three', value: '3' },
          { text: 'Four', value: '4' },
          { text: 'Five', value: '5' },
          { text: 'Six', value: '6' },
          { text: 'Seven', value: '7' },
          { text: 'Eight', value: '8' }
        ]}
        placeholder="Select a number"
      />
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
