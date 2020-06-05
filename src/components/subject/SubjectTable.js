import React from 'react';
import PropTypes from 'prop-types';

import Subjects from '../../constants/Subjects';

import UIButton from '../../UIComponents/buttons/UIButton';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UITable from '../../UIComponents/table/UITable';

const SubjectTable = ({ filterKeyword = '', onSubjectClick = () => {} }) => {
  const subjectEntries = Subjects.filter(subject => {
    const { code, name } = subject;

    const noFilterKeyword = filterKeyword === '';
    if (noFilterKeyword) {
      return true;
    }

    const upperCaseFilterKeyowrd = filterKeyword.toUpperCase();
    const codeContainsKeyword = code
      .toUpperCase()
      .includes(upperCaseFilterKeyowrd);
    const nameContainsKeyword = name
      .toUpperCase()
      .includes(upperCaseFilterKeyowrd);

    if (codeContainsKeyword || nameContainsKeyword) {
      return true;
    }

    return false;
  }).map(subject => {
    const handleClick = () => {
      onSubjectClick(subject.code);
    };
    return (
      <tr key={subject.code}>
        <td>{subject.code}</td>
        <td>
          <UIFlex>
            <div style={{ flex: 1 }}>{subject.name}</div>
            <UIButton onClick={handleClick}>Explore</UIButton>
          </UIFlex>
        </td>
      </tr>
    );
  });

  return (
    <UITable className="p-2">
      <thead>
        <tr>
          <th>Subject Code</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>{subjectEntries}</tbody>
    </UITable>
  );
};

SubjectTable.propTypes = {
  filterKeyword: PropTypes.string,
  onSubjectClick: PropTypes.func
};

export default SubjectTable;
