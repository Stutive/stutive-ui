import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../containers/UIContainer';
import UIButton from '../buttons/UIButton';

import UIDrawer from './UIDrawer';

export default {
  component: UIDrawer,
  title: 'UIDrawer'
};

export const Empty = () => {
  const [shouldRender, setRender] = useState(false);
  return (
    <>
      <UIContainer className="mt-3">
        <UIButton onClick={() => setRender(!shouldRender)}>
          Toggle show
        </UIButton>
      </UIContainer>
      <UIDrawer
        title="UIDrawer"
        show={shouldRender}
        onClickOutside={action('onClickOutside')}
      >
        <div>
          <h3>Hello World</h3>
        </div>
      </UIDrawer>
    </>
  );
};
