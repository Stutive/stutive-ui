import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UIContainer from '../UIComponents/containers/UIContainer';
import UISelect from '../UIComponents/inputs/UISelect';

import { fetchCourses } from '../actions/Courses';
import { fetchFilterOptions } from '../actions/Filters';
import { getAllCourses } from '../selectors/courses';
import * as Colors from '../UIComponents/StyleTokens/colors';

import CoursePreviewCard from '../components/CoursePreviewCard';
import FilterSidebar from './FilterSidebar';
import NavigationBar from './NavigationBar';

const CourseExplorer = ({ courses, fetchCourses, fetchFilterOptions }) => {
  useEffect(() => {
    fetchCourses();
    fetchFilterOptions();
  }, [fetchCourses, fetchFilterOptions]);

  return (
    <div style={{ backgroundColor: Colors.KOALA }}>
      <NavigationBar />
      <UIContainer className="mt-3">
        <Row>
          <Col lg={4}>
            <FilterSidebar />
          </Col>
          <Col lg={8}>
            <UISelect anchorType="input" className="mb-3" />
            <div>
              {courses.map(course => {
                const key = course.get('id');
                const title = course.get('title');

                return (
                  <CoursePreviewCard
                    key={key}
                    creditHours={course.get('hours')}
                    className="mb-2"
                    description={course.get('description')}
                    generalEducationRequirements={course
                      .get('genEdAttributes')
                      .toJS()}
                    title={title}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </UIContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    courses: getAllCourses(state)
  };
};
const mapDispatchToProps = {
  fetchCourses,
  fetchFilterOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseExplorer);
