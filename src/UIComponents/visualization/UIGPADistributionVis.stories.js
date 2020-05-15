import React from 'react';

import UIContainer from '../containers/UIContainer';
import UIGPADistributionVis from './UIGPADistributionVis';

export default {
  component: UIGPADistributionVis,
  title: 'UIGPADistributionVis'
};

export const usage = () => {
  return (
    <UIContainer style={{ padding: '2em' }}>
      <UIGPADistributionVis
        average={2}
        middle50Range={[1.75, 2.23]}
        middle75Range={[1, 3]}
        middle90Range={[1.1, 3.1]}
      />
      <UIGPADistributionVis
        average={3}
        middle50Range={[2.75, 3.23]}
        middle75Range={[1.7, 3.8]}
        middle90Range={[1.1, 3.9]}
      />
      <UIGPADistributionVis
        average={3}
        middle50Range={[2.75, 3.23]}
        middle75Range={[1.7, 3.8]}
        middle90Range={[1.1, 3.9]}
      />
    </UIContainer>
  );
};
