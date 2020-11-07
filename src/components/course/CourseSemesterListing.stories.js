import React from 'react';

import UIContainer from '../../UIComponents/containers/UIContainer';
import CourseSemesterListing from './CourseSemesterListing';

export default {
  component: CourseSemesterListing,
  title: 'CourseSemesterListing'
};

export const usage = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <CourseSemesterListing
        courseCode="AAS 100"
        courseTitle="Introduction to Asian American Studies"
        hours={[1, 2]}
      />
    </UIContainer>
  );
};
