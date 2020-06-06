import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';

import UIContainer from '../UIComponents/containers/UIContainer';

import { fetchCourses } from '../actions/Courses';
import { fetchFilterOptions } from '../actions/Filters';
import { getAllIds, getIsFetching } from '../selectors/courses';
import { fetchGPAData } from '../actions/GPAData';

import useDeviceType from '../UIComponents/lib/useDeviceType';
import { DEVICE_TYPE_ENUM } from '../UIComponents/StyleTokens/sizes';

import Page from '../components/Page';
import FilterHeader from './filter/FilterHeader';
import FilterSidebar from './filter/FilterSidebar';
import ScheduleDrawer from './ScheduleDrawer';
import CourseList from '../components/course/CourseList';

const CourseExplorer = ({
  courseIds,
  fetchCourses,
  fetchGPAData,
  fetchFilterOptions,
  isFetching
}) => {
  useEffect(() => {
    fetchCourses();
    fetchFilterOptions();
  }, [fetchCourses, fetchFilterOptions]);

  useEffect(() => {
    fetchGPAData();
  }, [courseIds, fetchGPAData]);

  const deviceType = useDeviceType();
  const isMobile =
    deviceType === DEVICE_TYPE_ENUM.PHONE ||
    deviceType === DEVICE_TYPE_ENUM.PHABLET;

  return (
    <>
      <Page>
        {isMobile && <FilterHeader />}
        <div style={{ position: 'fixed', width: '100%' }}>
          <UIContainer className="pt-3">
            <Col md={{ span: 4 }}>{!isMobile && <FilterSidebar />}</Col>
          </UIContainer>
        </div>
        <UIContainer className="pt-3">
          <Col md={{ span: 8, offset: 4 }}>
            <CourseList
              courseIds={courseIds}
              isLoading={isFetching}
              onRequestMoreCourses={fetchCourses}
            />
          </Col>
        </UIContainer>
      </Page>
      <ScheduleDrawer />
    </>
  );
};

const mapStateToProps = state => {
  return {
    courseIds: getAllIds(state),
    isFetching: getIsFetching(state)
  };
};
const mapDispatchToProps = {
  fetchGPAData,
  fetchCourses,
  fetchFilterOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseExplorer);
