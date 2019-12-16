import React from 'react';

import UIContainer from '../containers/UIContainer';
import UITag from './UITag';

export default {
  component: UITag,
  title: 'UITag'
};

export const listStyles = () => {
  return (
    <>
      <UIContainer style={{ paddingTop: '2em' }}>
        <UITag use="default">Default</UITag>
        <UITag use="success">Success</UITag>
        <UITag use="warning">Warning</UITag>
        <UITag use="danger">Danger</UITag>
      </UIContainer>
      <UIContainer style={{ paddingTop: '2em' }}>
        <UITag closeable={true} use="default">
          Default
        </UITag>
        <UITag closeable={true} use="success">
          Success
        </UITag>
        <UITag closeable={true} use="warning">
          Warning
        </UITag>
        <UITag closeable={true} use="danger">
          Danger
        </UITag>
      </UIContainer>
      <UIContainer style={{ paddingTop: '2em' }}>
        <UITag closeable={true} use="default">
          Default
        </UITag>
        <UITag closeable={false} use="success">
          Success
        </UITag>
        <UITag closeable={true} use="warning">
          Warning
        </UITag>
        <UITag closeable={false} use="danger">
          Danger
        </UITag>
      </UIContainer>
    </>
  );
};
