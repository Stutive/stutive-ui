import React from 'react';

import * as Colors from '../UIComponents/StyleTokens/colors';
import UIContainer from '../UIComponents/containers/UIContainer';

import NavigationBar from './NavigationBar';

import CourseGroup from './major/CourseGroup';

//  TEMP
import { CS } from '../fixtures/Majors';

const MajorRequirementsView = () => {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <NavigationBar />
        <div
          style={{
            position: 'relative',
            backgroundColor: Colors.KOALA,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <UIContainer className="pt-3">
            <h1>{CS.title}</h1>
            {CS.requirements.map(requirement => (
              <CourseGroup {...requirement} />
            ))}
          </UIContainer>
        </div>
      </div>
    </>
  );
};

export default MajorRequirementsView;
