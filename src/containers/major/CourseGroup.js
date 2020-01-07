import React from 'react';

const CourseGroup = props => {
  const { title, requirements = [], display } = props;

  const renderHeader = () => {
    if (display === 'SECTION') {
      return <h3>{title}</h3>;
    }
    return <h4>{title}</h4>;
  };

  const renderBody = () => {
    return requirements.map(requirement => {
      if (typeof requirement === 'string') {
        return <p>{requirement}</p>;
      }
      return <CourseGroup {...requirement} />;
    });
  };

  return (
    <div>
      {renderHeader()}
      {renderBody()}
    </div>
  );
};

export default CourseGroup;
