import React from 'react';
import { action } from '@storybook/addon-actions';

import FilterMenu from './FilterMenu';

import { FILTER_OPTIONS_RESPONSE } from '../../fixtures/FilterOptions';

export default {
  component: FilterMenu,
  title: 'FilterMenu'
};

export const empty = () => {
  return (
    <FilterMenu
      options={FILTER_OPTIONS_RESPONSE}
      onChange={action('onChange')}
    />
  );
};
