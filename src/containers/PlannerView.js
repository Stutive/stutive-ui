import React, { useState } from 'react';
import { connect } from 'react-redux';

import UIContainer from '../UIComponents/containers/UIContainer';
import UIFlex from '../UIComponents/layout/UIFlex';
import UIOptionButton from '../UIComponents/buttons/UIOptionButton';
import UIIcon from '../UIComponents/icon/UIIcon';

import AddCourseModal from './planner/AddCourseModal';
import AddSemesterModal from '../components/planner/AddSemesterModal';
import Page from '../components/Page';
import SemesterCard from './planner/SemesterCard';

import {
  addSemester,
  updateSemester,
  removeSemester,
  addCourseToSemester,
  removeCourseFromSemester
} from '../actions/GraduationPlan';
import {
  getSemestersById,
  getAllSemestersOrdered
} from '../selectors/graduationPlan';

const PlannerView = ({
  /* connect props */
  semestersOrdered,
  getSemesterById,
  addSemester,
  updateSemester,
  // removeSemester,
  addCourseToSemester
  // removeCourseFromSemester
}) => {
  const [showAddSemesterModal, setShowAddSemesterModal] = useState(false);
  const displayAddSemesterModal = () => setShowAddSemesterModal(true);
  const hideAddSemesterModal = () => setShowAddSemesterModal(false);
  const handleAddSemester = newSemesterTitle => {
    const randomString = Math.random()
      .toString(36)
      .substr(2, 9);

    addSemester(randomString, newSemesterTitle);
    hideAddSemesterModal();
  };
  const handleSemesterChange = (semesterId, changedFields) => {
    for (const [field, value] of Object.entries(changedFields)) {
      updateSemester(semesterId, field, value);
    }
  };

  const [semesterToAddCourse, setSemesterToAddCourse] = useState(null);
  const showAddCourseModal = semesterToAddCourse !== null;
  const hideAddCourseModal = () => setSemesterToAddCourse(null);
  const makeHandleAddCourse = semesterId => () => {
    setSemesterToAddCourse(semesterId);
  };
  const getSemesterTitleFromSemesterId = semesterId => {
    if (!semesterId) {
      return null;
    }
    return getSemesterById(semesterId).get('label');
  };
  const handleAddCourseToSemester = semesterId => courseId => {
    addCourseToSemester(semesterId, courseId);
    hideAddCourseModal();
  };

  const renderSemesters = () => {
    return semestersOrdered.map(semester => {
      const id = semester.get('id');
      const title = semester.get('label');
      const totalCreditHours = semester.get('totalCreditHours');
      const courseIds = semester.get('courseIds');

      return (
        <SemesterCard
          id={id}
          key={id}
          className="p-1"
          title={title}
          courseIds={courseIds}
          totalCreditHours={totalCreditHours}
          onChange={handleSemesterChange}
          onAddCourseButtonClick={makeHandleAddCourse(id)}
        />
      );
    });
  };
  return (
    <Page>
      <UIContainer>
        <AddSemesterModal
          show={showAddSemesterModal}
          onAdd={handleAddSemester}
          onCancel={hideAddSemesterModal}
        />
        <AddCourseModal
          show={showAddCourseModal}
          onAdd={handleAddCourseToSemester(semesterToAddCourse)}
          onCancel={hideAddCourseModal}
          semesterTitle={getSemesterTitleFromSemesterId(semesterToAddCourse)}
        />
        <UIFlex className="pt-3" wrap="wrap" align="center">
          {renderSemesters()}
          <UIOptionButton use="secondary" onClick={displayAddSemesterModal}>
            <UIOptionButton.withIcon
              iconComponent={
                <UIIcon
                  name="fas fa-plus"
                  color={UIOptionButton.getColor('secondary')}
                  size="large"
                />
              }
              labelComponent={
                <h5 className="text-center">Add Semester to Plan</h5>
              }
            />
          </UIOptionButton>
        </UIFlex>
      </UIContainer>
    </Page>
  );
};

const mapStateToProps = state => ({
  semestersOrdered: getAllSemestersOrdered(state),
  getSemesterById: id => getSemestersById(state).get(id)
});

const mapDispatchToProps = {
  addSemester,
  updateSemester,
  removeSemester,
  addCourseToSemester,
  removeCourseFromSemester
};

export default connect(mapStateToProps, mapDispatchToProps)(PlannerView);
