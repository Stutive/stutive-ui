import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import UIButton from '../UIComponents/buttons/UIButton';
import UIContainer from '../UIComponents/containers/UIContainer';
import UIFlex from '../UIComponents/layout/UIFlex';
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
    <div style={{ backgroundColor: Colors.KOALA, height: '100%' }}>
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
            <UIFlex justify="center" className="pt-3 pb-5">
              <UIButton onClick={fetchCourses}>Show More Courses</UIButton>
            </UIFlex>
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
