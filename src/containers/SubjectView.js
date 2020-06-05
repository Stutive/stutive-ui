import React from 'react';
import { useParams } from 'react-router-dom';

import UIContainer from '../UIComponents/containers/UIContainer';

import Page from '../components/Page';

const SubjectView = () => {
  const params = useParams();
  const { subjectCode } = params;

  return (
    <Page>
      <UIContainer>
        <h1>{subjectCode}</h1>
      </UIContainer>
    </Page>
  );
};

export default SubjectView;
