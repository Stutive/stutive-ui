import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../containers/UIContainer';
import UIListSelect from './UIListSelect';

export default {
  component: UIListSelect,
  title: 'UIListSelect'
};

export const basicUsage = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UIListSelect
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
      />
    </UIContainer>
  );
};

export const multiUsage = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UIListSelect
        onChange={action('onChange')}
        multi={true}
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
      />
    </UIContainer>
  );
};
