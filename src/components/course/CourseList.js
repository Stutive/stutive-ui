import React from 'react';
import PropTypes from 'prop-types';

import UIButton from '../../UIComponents/buttons/UIButton';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UILoadingSpinner from '../../UIComponents/loading/UISpinner';

import CoursePreviewCard from '../../containers/course/CoursePreviewCard';

const CourseList = ({
  courseIds = [],
  focusedCourseIds = [],
  isLoading = true,
  onCourseClick = () => {},
  onRequestMoreCourses = () => {}
}) => {
  if (courseIds.size === 0) {
    if (isLoading) {
      return (
        <UIFlex justify="center" className="mt-5">
          <UILoadingSpinner />
        </UIFlex>
      );
    }

    return (
      <UIFlex justify="center" className="mt-5">
        <h3>No courses found.</h3>
      </UIFlex>
    );
  }

  return (
    <>
      <div>
        {courseIds.map(id => {
          const isFocused = focusedCourseIds.indexOf(id) !== -1;
          return (
            <CoursePreviewCard
              key={id}
              courseId={id}
              isFocused={isFocused}
              onClick={() => onCourseClick(id)}
            />
          );
        })}
      </div>
      {isLoading ? (
        <UIFlex justify="center" className="mt-5">
          <UILoadingSpinner />
        </UIFlex>
      ) : (
        <UIFlex justify="center" className="pt-3 pb-5">
          <UIButton onClick={onRequestMoreCourses}>Show More Courses</UIButton>
        </UIFlex>
      )}
    </>
  );
};

CourseList.propTypes = {
  courseIds: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  onRequestMoreCourses: PropTypes.func
};

export default CourseList;
