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

export const searchableUsage = () => {
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
        searchable={true}
        placeholder="Select a number"
      />
    </UIContainer>
  );
};

export const withInputAnchorType = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UISelect
        anchorType={'input'}
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
        searchable={true}
        placeholder="Select a number"
      />
    </UIContainer>
  );
};

export const withoutOptions = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UISelect options={[]} value={'123'} />
    </UIContainer>
  );
};
