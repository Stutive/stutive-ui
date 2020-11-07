import React from 'react';
import { action } from '@storybook/addon-actions';

import UIContainer from '../../UIComponents/containers/UIContainer';
import UIFlex from '../../UIComponents/layout/UIFlex';
import SemesterCard from './SemesterCard';

export default {
  component: SemesterCard,
  title: 'SemesterCard'
};

const COURSES_FA20 = [
  {
    courseCode: 'CS 421',
    courseTitle: 'Programming Languages and Compilers',
    hours: '3 hrs'
  },
  {
    courseCode: 'CS 425',
    courseTitle: 'Distributed Systems',
    hours: '4 hrs'
  },
  {
    courseCode: 'CS 440',
    courseTitle: 'Artificial Intelligence',
    hours: '3 hrs'
  },
  {
    courseCode: 'CS 498IoT',
    courseTitle: 'Internet of Things',
    hours: '3 hrs'
  },
  {
    courseCode: 'AAS 100',
    courseTitle: 'Intro to Asian American Studies',
    hours: '3 hrs'
  }
];

const COURSES_SP21 = [
  {
    courseCode: 'CS 438',
    courseTitle: 'Communication Networks',
    hours: '3 hrs'
  },
  {
    courseCode: 'CS 446',
    courseTitle: 'Machine Learning',
    hours: '4 hrs'
  },
  {
    courseCode: 'PHIL 103',
    courseTitle: 'Intro to Ethics, ACP',
    hours: '3 hrs'
  }
];

const COURSES_SU21 = [
  {
    courseCode: 'STAT 410',
    courseTitle: 'Something about Statistics',
    hours: '3 hrs'
  }
];

export const empty = () => {
  return (
    <UIContainer style={{ paddingTop: '2em' }}>
      <UIFlex align="stretch">
        <SemesterCard
          className="mb-3"
          title="Fall 2020"
          courses={COURSES_FA20}
          totalCreditHours={'18 hrs'}
          onAddCourseButtonClick={action('Add course to Fall 2020')}
        />
        <SemesterCard
          className="mb-3"
          title="Spring 2021"
          courses={COURSES_SP21}
          totalCreditHours={'10 hrs'}
          onAddCourseButtonClick={action('Add course to Spring 2021')}
        />
        <SemesterCard
          className="mb-3"
          title="Summer 2021"
          courses={COURSES_SU21}
          totalCreditHours={'3 hrs'}
          onAddCourseButtonClick={action('Add course to Summer 2021')}
        />
      </UIFlex>
    </UIContainer>
  );
};
