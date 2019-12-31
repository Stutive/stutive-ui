import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import UIButton from '../UIComponents/buttons/UIButton';
import UIContainer from '../UIComponents/containers/UIContainer';
import UIFlex from '../UIComponents/layout/UIFlex';
import UISelect from '../UIComponents/inputs/UISelect';

import { fetchCourses } from '../actions/Courses';
import { fetchFilterOptions } from '../actions/Filters';
import { getAllIds } from '../selectors/courses';
import * as Colors from '../UIComponents/StyleTokens/colors';
import useDeviceType from '../UIComponents/lib/useDeviceType';
import { DEVICE_TYPE_ENUM } from '../UIComponents/StyleTokens/sizes';

import CoursePreviewCard from './course/CoursePreviewCard';
import FilterSidebar from './FilterSidebar';
import NavigationBar from './NavigationBar';

const CourseExplorer = ({ courseIds, fetchCourses, fetchFilterOptions }) => {
  useEffect(() => {
    fetchCourses();
    fetchFilterOptions();
  }, [fetchCourses, fetchFilterOptions]);

  const deviceType = useDeviceType();
  const shouldRenderMobileVersion =
    deviceType === DEVICE_TYPE_ENUM.PHONE ||
    deviceType === DEVICE_TYPE_ENUM.PHABLET;

  return (
    <>
      <NavigationBar />
      <div
        style={{
          position: 'relative',
          backgroundColor: Colors.KOALA,
          height: '100%'
        }}
      >
        <UIFlex wrap={shouldRenderMobileVersion ? 'wrap' : 'nowrap'}>
          <div
            style={{
              flex: `2 0 ${shouldRenderMobileVersion ? '100%' : 'auto'}`
            }}
          >
            <FilterSidebar />
          </div>
          <div style={{ flex: `5 1 auto` }}>
            <UIContainer className="mt-3">
              {!shouldRenderMobileVersion && (
                <UISelect anchorType="input" className="mb-3" />
              )}
              <div>
                {courseIds.map(id => (
                  <CoursePreviewCard key={id} courseId={id} />
                ))}
              </div>
              <UIFlex justify="center" className="pt-3 pb-5">
                <UIButton onClick={fetchCourses}>Show More Courses</UIButton>
              </UIFlex>
            </UIContainer>
          </div>
        </UIFlex>
      </div>
    </>
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
