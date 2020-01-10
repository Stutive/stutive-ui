import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';

import UIButton from '../UIComponents/buttons/UIButton';
import UIContainer from '../UIComponents/containers/UIContainer';
import UIFlex from '../UIComponents/layout/UIFlex';
import UILoadingSpinner from '../UIComponents/loading/UISpinner';

import { fetchCourses } from '../actions/Courses';
import { fetchFilterOptions } from '../actions/Filters';
import { getAllIds, getIsFetching } from '../selectors/courses';
import * as Colors from '../UIComponents/StyleTokens/colors';
import useDeviceType from '../UIComponents/lib/useDeviceType';
import { DEVICE_TYPE_ENUM } from '../UIComponents/StyleTokens/sizes';

import CoursePreviewCard from './course/CoursePreviewCard';
import FilterHeader from './filter/FilterHeader';
import FilterSidebar from './filter/FilterSidebar';
import NavigationBar from './NavigationBar';
import ScheduleDrawer from './ScheduleDrawer';

const CourseExplorer = ({
  courseIds,
  fetchCourses,
  fetchFilterOptions,
  isFetching
}) => {
  useEffect(() => {
    fetchCourses();
    fetchFilterOptions();
  }, [fetchCourses, fetchFilterOptions]);

  const deviceType = useDeviceType();
  const isMobile =
    deviceType === DEVICE_TYPE_ENUM.PHONE ||
    deviceType === DEVICE_TYPE_ENUM.PHABLET;

  const renderBody = () => {
    if (courseIds.size === 0) {
      if (isFetching) {
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
          {courseIds.map(id => (
            <CoursePreviewCard key={id} courseId={id} />
          ))}
        </div>
        {isFetching ? (
          <UIFlex justify="center" className="mt-5">
            <UILoadingSpinner />
          </UIFlex>
        ) : (
          <UIFlex justify="center" className="pt-3 pb-5">
            <UIButton onClick={fetchCourses}>Show More Courses</UIButton>
          </UIFlex>
        )}
      </>
    );
  };
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: Colors.KOALA,
          paddingTop: '7vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden'
        }}
      >
        <NavigationBar />
        <div
          style={{
            position: 'relative',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {isMobile && <FilterHeader />}
          <div style={{ position: 'fixed', width: '100%' }}>
            <UIContainer className="pt-3">
              <Col md={{ span: 4 }}>{!isMobile && <FilterSidebar />}</Col>
            </UIContainer>
          </div>
          <UIContainer className="pt-3">
            <Col md={{ span: 8, offset: 4 }}>
              <div>{renderBody()}</div>
            </Col>
          </UIContainer>
        </div>
      </div>
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
  fetchCourses,
  fetchFilterOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseExplorer);
