import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as Colors from '../UIComponents/StyleTokens/colors';
import UIDrawer from '../UIComponents/drawer/UIDrawer';
import UIIcon from '../UIComponents/icon/UIIcon';

import { getCourses } from '../selectors/schedules';
import { scheduleRemoveCourse } from '../actions/Schedules';

import CourseScheduleListing from '../components/CourseScheduleListing';

const ToggleButton = styled.div`
  display: inline-block;
  position: absolute;
  top: -4.5rem;
  right: 1rem;
  background-color: ${Colors.OZ};
  padding: 0.6rem;
  border-radius: 0.9rem;
  box-shadow: 0px -3px 20px 0px rgba(0, 0, 0, 0.1);
`;

const ScheduleDrawer = ({ courses, scheduleRemoveCourse }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleShowDrawer = _ => setShowDrawer(!showDrawer);

  const renderToggleButton = () => (
    <ToggleButton onClick={toggleShowDrawer}>
      <UIIcon
        color={Colors.OLAF}
        name={showDrawer ? 'fas fa-calendar-times' : 'fas fa-calendar'}
      />
    </ToggleButton>
  );

  const renderBody = () => {
    if (courses.size === 0) {
      return <p className="text-center">Add courses to schedule</p>;
    }

    return courses.map(course => {
      const courseId = course.get('id');
      const handleRemove = () => scheduleRemoveCourse(courseId);
      return (
        <CourseScheduleListing
          key={courseId}
          course={course.toJS()}
          handleRemoveCourse={handleRemove}
        />
      );
    });
  };

  return (
    <>
      <UIDrawer
        anchor={renderToggleButton()}
        show={showDrawer}
        title="Schedule"
      >
        {renderBody()}
      </UIDrawer>
    </>
  );
};

ScheduleDrawer.propTypes = {
  courses: PropTypes.object, // TODO: figure out ImmutableJS PropType Validation
  scheduleRemoveCourse: PropTypes.func
};

const mapStateToProps = state => ({
  courses: getCourses(state)
});

const mapDispatchToProps = {
  scheduleRemoveCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDrawer);
