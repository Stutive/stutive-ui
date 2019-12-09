import React from 'react';

import UIContainer from '../UIComponents/containers/UIContainer';
import CoursePreviewCard from './CoursePreviewCard';

export default {
  component: CoursePreviewCard,
  title: 'CoursePreviewCard'
};

export const empty = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <CoursePreviewCard
        title="CS 125 Introduction to Computer Science"
        creditHours="3 Credit Hours"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
        generalEducationRequirements={['SBS', 'CS']}
      />
    </UIContainer>
  );
};
