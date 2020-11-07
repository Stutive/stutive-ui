import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../../UIComponents/containers/UIContainer';
import UIFlex from '../../UIComponents/layout/UIFlex';
import SemesterCard from './SemesterCard';

export default {
  component: SemesterCard,
  title: 'SemesterCard'
};

export const empty = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UIFlex align="stretch">
        <SemesterCard
          label={'something'}
          onLabelChange={action('label change')}
          totalCreditHours={'10 hours'}
        ></SemesterCard>
      </UIFlex>
    </UIContainer>
  );
};
