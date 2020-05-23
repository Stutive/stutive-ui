import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../containers/UIContainer';
import UIOptionButton from './UIOptionButton';
import UIFlex from '../layout/UIFlex';
import UIIcon from '../icon/UIIcon';

export default {
  component: UIOptionButton,
  title: 'UIOptionButton'
};

export const basic = () => (
  <UIContainer style={{ paddingTop: '2em' }}>
    <UIFlex>
      <UIOptionButton
        className="mr-2"
        use="primary"
        onClick={action('clicked')}
      >
        Press me!
      </UIOptionButton>
      <UIOptionButton
        className="mr-2"
        use="secondary"
        onClick={action('clicked')}
      >
        gang gang
      </UIOptionButton>
      <UIOptionButton
        className="mr-2"
        use="tertiary"
        onClick={action('clicked')}
      >
        Schedules
      </UIOptionButton>
      <UIOptionButton
        className="mr-2"
        use="tertiary-light"
        onClick={action('clicked')}
      >
        General Education
      </UIOptionButton>
    </UIFlex>
    <UIFlex className="mt-2">
      <UIOptionButton
        className="mr-2"
        use="primary"
        onClick={action('clicked')}
      >
        <UIOptionButton.withIcon
          iconComponent={
            <UIIcon color={UIOptionButton.getColor('primary')} size="large" />
          }
          labelComponent={<h5 className="text-center">mad</h5>}
        />
      </UIOptionButton>
      <UIOptionButton
        className="mr-2"
        use="secondary"
        onClick={action('clicked')}
      >
        <UIOptionButton.withIcon
          iconComponent={
            <UIIcon color={UIOptionButton.getColor('secondary')} size="large" />
          }
          labelComponent={<h5 className="text-center">Hello world</h5>}
        />
      </UIOptionButton>
      <UIOptionButton
        className="mr-2"
        use="tertiary"
        onClick={action('clicked')}
      >
        <UIOptionButton.withIcon
          iconComponent={
            <UIIcon
              color={UIOptionButton.getColor('tertiary')}
              size="large"
              name="fas fa-brain"
            />
          }
          labelComponent={<h5 className="text-center">brain</h5>}
        />
      </UIOptionButton>
      <UIOptionButton
        className="mr-2"
        use="tertiary-light"
        onClick={action('clicked')}
      >
        <UIOptionButton.withIcon
          iconComponent={
            <UIIcon
              color={UIOptionButton.getColor('tertiary-light')}
              size="large"
            />
          }
          labelComponent={<h5 className="text-center">Hello world</h5>}
        />
      </UIOptionButton>
    </UIFlex>
  </UIContainer>
);
