import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../containers/UIContainer';
import UIButton from './UIButton';
import UIFlex from '../layout/UIFlex';

export default {
  component: UIButton,
  title: 'UIButton'
};

export const empty = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <h4>Idle</h4>
      <UIFlex>
        <UIButton onClick={action('clicked')} use="primary">
          Primary
        </UIButton>
        <UIButton onClick={action('clicked')} use="secondary">
          Secondary
        </UIButton>
        <UIButton onClick={action('clicked')} use="tertiary">
          Tertiary
        </UIButton>
        <UIButton onClick={action('clicked')} use="tertiary-light">
          Tertiary Light
        </UIButton>
      </UIFlex>
      <h4>Hover</h4>
      <UIFlex>
        <UIButton use="primary" hovered={true}>
          Primary
        </UIButton>
        <UIButton use="secondary" hovered={true}>
          Secondary
        </UIButton>
        <UIButton use="tertiary" hovered={true}>
          Tertiary
        </UIButton>
        <UIButton use="tertiary-light" hovered={true}>
          Tertiary Light
        </UIButton>
      </UIFlex>
      <h4>Active</h4>
      <UIFlex>
        <UIButton use="primary" active={true}>
          Primary
        </UIButton>
        <UIButton use="secondary" active={true}>
          Secondary
        </UIButton>
        <UIButton use="tertiary" active={true}>
          Tertiary
        </UIButton>
        <UIButton use="tertiary-light" active={true}>
          Tertiary Light
        </UIButton>
      </UIFlex>
    </UIContainer>
  );
};
