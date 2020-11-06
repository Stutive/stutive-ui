import React, { useState } from 'react';
import { connect } from 'react-redux';

import UIContainer from '../UIComponents/containers/UIContainer';
import UIFlex from '../UIComponents/layout/UIFlex';

import AddCourseModal from '../components/planner/AddCourseModal';
import AddSemesterButton from './planner/AddSemesterButton';
import AddSemesterModal from '../components/planner/AddSemesterModal';
import Page from '../components/Page';
import SemesterCard from '../components/semester/SemesterCard';

import { getById } from '../selectors/courses';

const PlannerView = ({
  /* connect props */
  coursesById
}) => {
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

  const [semesterToAddCourse, setSemesterToAddCourse] = useState(null);
  const showAddCourseModal = semesterToAddCourse !== null;
  const hideAddCourseModal = () => setSemesterToAddCourse(null);
  const makeHandleAddCourse = semesterId => () => {
    setSemesterToAddCourse(semesterId);
  };
  const getSemesterTitleFromSemesterId = semesterId => {
    for (const semester of semesters) {
      if (semester.id === semesterId) {
        return semester.title;
      }
    }
    return null;
  };
  const handleAddCourseToSemester = semesterId => courseId => {
    const course = coursesById.get(courseId);
    const courseObj = {
      courseCode: course.get('code'),
      courseTitle: course.get('title'),
      hours: course.get('hours')[0] // TODO: temp fix
    };

    const semestersCopy = [...semesters];
    let currSemesterIdx = -1;
    for (let i = 0; i < semestersCopy.length; i++) {
      const semester = semestersCopy[i];
      if (semester.id === semesterId) {
        currSemesterIdx = i;
        break;
      }
    }

    if (currSemesterIdx !== -1) {
      const currSemester = {
        ...semestersCopy[currSemesterIdx],
        courses: [...semestersCopy[currSemesterIdx].courses, courseObj]
      };

      console.log('hi', currSemester);

      const newSemesters = [
        ...semestersCopy.splice(0, currSemesterIdx),
        currSemester,
        ...semestersCopy.splice(currSemesterIdx + 1)
      ];
      console.log('new', newSemesters);
      setSemesters(newSemesters);
    }

    hideAddCourseModal();
  };

  const renderSemesters = () => {
    return semesters.map(({ courses, id, title, totalCreditHours }) => (
      <SemesterCard
        id={id}
        key={id}
        className="p-1"
        title={title}
        courses={courses}
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
        <AddCourseModal
          show={showAddCourseModal}
          onAdd={handleAddCourseToSemester(semesterToAddCourse)}
          onCancel={hideAddCourseModal}
          semesterTitle={getSemesterTitleFromSemesterId(semesterToAddCourse)}
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

const mapStateToProps = state => ({
  coursesById: getById(state)
});
export default connect(mapStateToProps, null)(PlannerView);
