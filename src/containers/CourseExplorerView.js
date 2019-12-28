import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UIContainer from '../UIComponents/containers/UIContainer';
import UISelect from '../UIComponents/inputs/UISelect';

import { fetchCourses } from '../actions/Courses';
import { fetchFilterOptions } from '../actions/Filters';
import { getAllIds } from '../selectors/courses';
import * as Colors from '../UIComponents/StyleTokens/colors';

import CoursePreviewCard from './course/CoursePreviewCard';
import FilterSidebar from './FilterSidebar';
import NavigationBar from './NavigationBar';

const CourseExplorer = ({ courseIds, fetchCourses, fetchFilterOptions }) => {
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
              {courseIds.map(id => (
                <CoursePreviewCard key={id} courseId={id} />
              ))}
            </div>
          </Col>
        </Row>
      </UIContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    courseIds: getAllIds(state)
  };
};
const mapDispatchToProps = {
  fetchCourses,
  fetchFilterOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseExplorer);
