import React, { useState } from 'react';

import UIContainer from '../UIComponents/containers/UIContainer';
import UIFlex from '../UIComponents/layout/UIFlex';

import AddSemesterButton from './planner/AddSemesterButton';
import AddSemesterModal from '../components/planner/AddSemesterModal';
import Page from '../components/Page';
import SemesterCard from '../components/semester/SemesterCard';

const PlannerView = () => {
  const [semesters, setSemesters] = useState([
    {
      id: '1234',
      title: 'Fall 2020',
      courses: [],
      totalCreditHours: 0
    }
  ]);

  const [showAddSemesterModal, setShowAddSemesterModal] = useState(false);
  const displayAddSemesterModal = () => setShowAddSemesterModal(true);
  const hideAddSemesterModal = () => setShowAddSemesterModal(false);
  const handleAddSemester = newSemesterTitle => {
    const randomString = Math.random()
      .toString(36)
      .substr(2, 9);
    setSemesters([
      ...semesters,
      {
        id: `${newSemesterTitle}-${randomString}`,
        title: newSemesterTitle,
        courses: [],
        totalCreditHours: 0
      }
    ]);
    hideAddSemesterModal();
  };

  const makeHandleAddCourse = semesterId => () => {
    console.log('add course to', semesterId);
  };
  const handleSemesterChange = (id, changedFields) => {
    const updatedFields = semesters.map(semester => {
      if (semester.id !== id) {
        return semester;
      }

      return {
        ...semester,
        ...changedFields
      };
    });
    setSemesters(updatedFields);
  };
  const renderSemesters = () => {
    return semesters.map(({ course, id, title, totalCreditHours }) => (
      <SemesterCard
        id={id}
        key={id}
        className="p-1"
        title={title}
        courses={course}
        totalCreditHours={totalCreditHours}
        onChange={handleSemesterChange}
        onAddCourseButtonClick={makeHandleAddCourse(id)}
      />
    ));
  };
  return (
    <Page>
      <UIContainer>
        <AddSemesterModal
          show={showAddSemesterModal}
          onAdd={handleAddSemester}
          onCancel={hideAddSemesterModal}
        />

        <UIFlex className="pt-3" wrap="wrap" align="center">
          {renderSemesters()}
          <AddSemesterButton
            className="p-1"
            onClick={displayAddSemesterModal}
          />
        </UIFlex>
      </UIContainer>
    </Page>
  );
};

export default PlannerView;
