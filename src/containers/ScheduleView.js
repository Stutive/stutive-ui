import React, { useState } from 'react';
import { withRouter } from 'react-router';
import lodash from 'lodash';

import { OZ } from '../UIComponents/StyleTokens/colors';
import UIBreadcrumb from '../UIComponents/navigation/UIBreadcrumb';
import UICard from '../UIComponents/containers/UICard';
import UIContainer from '../UIComponents/containers/UIContainer';
import UIFormControl from '../UIComponents/form/UIFormControl';
import UIIcon from '../UIComponents/icon/UIIcon';
import UITextInput from '../UIComponents/inputs/UITextInput';

import Page from '../components/Page';
import SubjectTable from '../components/subject/SubjectTable';

const ScheduleView = ({ history }) => {
  const [filterKeyword, setFilterKeyword] = useState('');
  const [debouncedSetFilterKeyword] = useState(() =>
    lodash.debounce(setFilterKeyword, 500)
  );
  const handleChange = e => {
    debouncedSetFilterKeyword(e.target.value);
  };

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
          <UIFormControl label="Filter subjects">
            <UITextInput
              onChange={handleChange}
              iconRight={<UIIcon name="fa fa-search" size="small" color={OZ} />}
            />
          </UIFormControl>
          <SubjectTable
            filterKeyword={filterKeyword}
            onSubjectClick={handleSubjectClick}
          />
        </UICard>
      </UIContainer>
    </Page>
  );
};

export default withRouter(ScheduleView);
