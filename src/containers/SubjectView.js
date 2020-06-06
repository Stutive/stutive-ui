import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import UIContainer from '../UIComponents/containers/UIContainer';

import { updateFilter } from '../actions/Filters';
import { getAllIds, getIsFetching } from '../selectors/courses';

import Page from '../components/Page';
import CourseList from '../components/course/CourseList';

const SubjectView = ({ updateFilter, courseIds, isFetching }) => {
  const params = useParams();
  const { subjectCode } = params;
  useEffect(() => {
    updateFilter('subject', subjectCode);
  }, [updateFilter, subjectCode]);

  return (
    <Page>
      <UIContainer className="pt-3">
        <div className="col-md-8 offset-md-2">
          <CourseList courseIds={courseIds} isLoading={isFetching} />
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
  updateFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectView);
