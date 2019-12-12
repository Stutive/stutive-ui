import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UIContainer from '../UIComponents/containers/UIContainer';
import UISelect from '../UIComponents/inputs/UISelect';

import { fetch } from '../actions/Courses';
import { getAllCourses } from '../selectors/courses';
import { IKE_LAYER, QUAD_LAYER, GRAINGER_LAYER } from '../constants/tokens';

import CoursePreviewCard from '../components/CoursePreviewCard';
import FilterSidebar from '../components/FilterSidebar';
import NavigationBar from './NavigationBar';

const CourseExplorer = ({ courses, fetch }) => {
  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <NavigationBar />
      <UIContainer className="mt-3">
        <Row>
          <Col lg={4}>
            <FilterSidebar />
          </Col>
          <Col lg={8} style={{ position: 'relative', zIndex: QUAD_LAYER }}>
            <UISelect
              anchorType="input"
              className="mb-3"
              style={{ zIndex: GRAINGER_LAYER }}
            />
            <div style={{ zIndex: IKE_LAYER }}>
              {courses.map(course => {
                const key = `${course.get('subject')} ${course.get('number')}`;

                const title = `${course.get('subject')} ${course.get(
                  'number'
                )} ${course.get('name')}`;
                return (
                  <CoursePreviewCard
                    key={key}
                    creditHours={course.get('creditHours')}
                    className="mb-2"
                    description={course.get('description')}
                    generalEducationRequirements={course.get(
                      'generalEducation'
                    )}
                    title={title}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </UIContainer>
    </>
  );
};

const mapStateToProps = state => {
  return {
    courses: getAllCourses(state)
  };
};
const mapDispatchToProps = {
  fetch
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseExplorer);
