import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import UIBreadcrumb from '../UIComponents/navigation/UIBreadcrumb';
import UIContainer from '../UIComponents/containers/UIContainer';

import { fetchCourses } from '../actions/Courses';
import { updateFilter } from '../actions/Filters';
import { getAllIds, getIsFetching } from '../selectors/courses';

import Page from '../components/Page';
import CourseList from '../components/course/CourseList';

const SubjectView = ({ updateFilter, courseIds, fetchCourses, isFetching }) => {
  const params = useParams();
  const { subjectCode } = params;
  useEffect(() => {
    updateFilter('subject', subjectCode);
  }, [updateFilter, subjectCode]);

  return (
    <Page>
      <UIContainer className="pt-3">
        <div className="col-lg-8 offset-lg-2">
          <UIBreadcrumb>
            <UIBreadcrumb.Item href="/schedule">Fall 2020</UIBreadcrumb.Item>
            <UIBreadcrumb.Item active={true}>{subjectCode}</UIBreadcrumb.Item>
          </UIBreadcrumb>
          <CourseList
            courseIds={courseIds}
            isLoading={isFetching}
            onRequestMoreCourses={fetchCourses}
          />
        </div>
      </UIContainer>
    </Page>
  );
};

const mapStateToProps = state => {
  return {
    courseIds: getAllIds(state),
    isFetching: getIsFetching(state)
  };
};

const mapDispatchToProps = {
  updateFilter,
  fetchCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectView);
