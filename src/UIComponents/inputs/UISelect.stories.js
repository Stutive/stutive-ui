import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../containers/UIContainer';
import UISelect from './UISelect';
import UISelectButtonAnchor from './UISelectButtonAnchor';
import UISelectDropdown from './UISelectDropdown';
import UIIcon from '../icon/UIIcon';

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
        placeholder="Select a number"
      />
    </UIContainer>
  );
};

export const isolatedAnchor = () => (
  <UIContainer style={{ paddingTop: '2em' }}>
    <UISelectButtonAnchor placeholder="Placeholder" />
    <UISelectButtonAnchor placeholder="Placeholder" value="Selected Value" />
    <UISelectButtonAnchor
      placeholder="Placeholder"
      value="Selected Value"
      iconRight="fas fa-search"
    />
    <UISelectButtonAnchor
      placeholder="Placeholder"
      value="Selected Value"
      iconRight={<UIIcon name="fas fa-times" size="small" />}
    />
  </UIContainer>
);

export const isolatedDropdown = () => (
  <UIContainer style={{ paddingTop: '2em' }}>
    <div style={{ position: 'relative' }}>
      <UISelectDropdown
        options={[
          { text: 'One', value: '1' },
          { text: 'Two', value: '2' },
          { text: 'Three', value: '3' }
        ]}
      />
    </div>
    <div style={{ position: 'relative', marginTop: '150px' }}>
      <UISelectDropdown
        dropdownHeaderTitle="Select a number"
        options={[{ text: 'One', value: '1' }]}
      />
    </div>
    <div style={{ position: 'relative', marginTop: '250px' }}>
      <UISelectDropdown
        dropdownHeaderTitle="Select a number"
        options={[{ text: 'One', value: '1' }]}
        searchable={true}
      />
    </div>
    <div style={{ position: 'relative', marginTop: '400px' }}>
      <UISelectDropdown
        options={[{ text: 'One', value: '1' }]}
        searchable={true}
      />
    </div>
  </UIContainer>
);
