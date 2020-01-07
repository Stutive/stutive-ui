import React from 'react';

import UICard from '../../UIComponents/containers/UICard';

import CourseGroupTypeEnum from '../../constants/CourseGroupTypeEnum';

import CourseGroupTable from './CourseGroupTable';

const CourseGroup = props => {
  const { title, description, requirements = [], display } = props;

  if (display === CourseGroupTypeEnum.TABLE) {
    return (
      <CourseGroupTable
        title={title}
        description={description}
        requirements={requirements}
      />
    );
  }

  const renderHeader = () => {
    return (
      <UICard>
        <h3>{title}</h3>
        <p>{description}</p>
      </UICard>
    );
  };

  const renderBody = () => {
    return requirements.map(requirement => {
      if (typeof requirement === 'string') {
        return <UICard>{requirement}</UICard>;
      }
      return (
        <div>
          <CourseGroup {...requirement} />
        </div>
      );
    });
  };

  return (
    <div style={{ paddingBottom: '2em' }}>
      {renderHeader()}
      {renderBody()}
    </div>
  );
};

export default CourseGroup;
