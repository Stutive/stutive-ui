import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UIContainer from '../UIComponents/containers/UIContainer';

import { fetch } from '../actions/Courses';

import NavigationBar from './NavigationBar';

const CourseExplorer = ({ fetch }) => {
  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <NavigationBar />
      <UIContainer>
        <Row>
          <Col lg={4}>
            <p>Filters</p>
          </Col>
          <Col lg={4}>
            <p> Main Shit</p>
          </Col>
        </Row>
      </UIContainer>
    </>
  );
};

const mapDispatchToProps = {
  fetch
};

export default connect(null, mapDispatchToProps)(CourseExplorer);
