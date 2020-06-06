import React from 'react';
import { withRouter } from 'react-router';

import UIBreadcrumb from '../UIComponents/navigation/UIBreadcrumb';
import UICard from '../UIComponents/containers/UICard';
import UIContainer from '../UIComponents/containers/UIContainer';

import Page from '../components/Page';
import SubjectTable from '../components/subject/SubjectTable';

const ScheduleView = ({ history }) => {
  const handleSubjectClick = subjectCode => {
    const path = `/schedule/${subjectCode}`;
    history.push(path);
  };

  return (
    <Page>
      <UIContainer className="pt-3">
        <div className="col-lg-8 offset-lg-2">
          <UIBreadcrumb>
            <UIBreadcrumb.Item active={true}>Fall 2020</UIBreadcrumb.Item>
          </UIBreadcrumb>
        </div>
        <UICard className="col-lg-8 offset-lg-2">
          <SubjectTable
            filterKeyword=""
            onSubjectClick={handleSubjectClick}
          ></SubjectTable>
        </UICard>
      </UIContainer>
    </Page>
  );
};

export default withRouter(ScheduleView);
