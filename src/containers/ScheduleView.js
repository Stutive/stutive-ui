import React from 'react';
import { withRouter } from 'react-router';

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
      <UIContainer>
        <UICard className="mt-5 col-md-10 offset-md-1">
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
