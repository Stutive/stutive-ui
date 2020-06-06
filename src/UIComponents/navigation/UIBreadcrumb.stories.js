import React from 'react';

import UIContainer from '../containers/UIContainer';
import UIBreadcrumb from './UIBreadcrumb';

export default {
  component: UIBreadcrumb,
  title: 'UIBreadcrumb'
};

export const basicUsage = () => {
  return (
    <UIContainer className="pt-3">
      <UIBreadcrumb>
        <UIBreadcrumb.Item href="#">Home</UIBreadcrumb.Item>
        <UIBreadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </UIBreadcrumb.Item>
        <UIBreadcrumb.Item active>Data</UIBreadcrumb.Item>
      </UIBreadcrumb>
    </UIContainer>
  );
};
