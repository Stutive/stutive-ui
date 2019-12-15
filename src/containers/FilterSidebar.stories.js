import React from 'react';

import UIContainer from '../UIComponents/containers/UIContainer';
import FilterSidebar from './FilterSidebar';

export default {
  component: FilterSidebar,
  title: 'FilterSidebar'
};

export const Regular = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <FilterSidebar />
    </UIContainer>
  );
};
