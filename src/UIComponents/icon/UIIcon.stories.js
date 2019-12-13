import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../containers/UIContainer';
import UIIcon from './UIIcon';
import UIFlex from '../layout/UIFlex';

export default {
  component: UIIcon,
  title: 'UIIcon'
};

export const basicUsage = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UIFlex>
        <UIIcon name="fas fa-angry" size="small" />
        <UIIcon name="fas fa-angry" size="small" />
        <UIIcon name="fas fa-angry" size="small" />
        <UIIcon name="fas fa-angry" size="small" />
        <UIIcon name="fas fa-angry" size="small" />
      </UIFlex>
      <UIFlex>
        <UIIcon name="fas fa-angry" />
        <UIIcon name="fas fa-angry" />
        <UIIcon name="fas fa-angry" />
        <UIIcon name="fas fa-angry" />
        <UIIcon name="fas fa-angry" />
      </UIFlex>
      <UIFlex>
        <UIIcon name="fas fa-angry" size="large" />
        <UIIcon name="fas fa-angry" size="large" />
        <UIIcon name="fas fa-angry" size="large" />
        <UIIcon name="fas fa-angry" size="large" />
        <UIIcon name="fas fa-angry" size="large" />
      </UIFlex>
    </UIContainer>
  );
};
