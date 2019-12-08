import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import UIContainer from '../UIComponents/containers/UIContainer';

import NavigationBar from './NavigationBar';

const CourseExplorer = () => {
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

export default CourseExplorer;
