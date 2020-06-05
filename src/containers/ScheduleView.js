import React from 'react';

import UICard from '../UIComponents/containers/UICard';
import UIContainer from '../UIComponents/containers/UIContainer';

import Page from '../components/Page';
import SubjectTable from '../components/subject/SubjectTable';

const ScheduleView = () => {
  return (
    <Page>
      <UIContainer>
        <UICard className="mt-5 col-md-10 offset-md-1">
          <SubjectTable
            filterKeyword=""
            onSubjectClick={s => alert(s)}
          ></SubjectTable>
        </UICard>
      </UIContainer>
    </Page>
  );
};

export default ScheduleView;
