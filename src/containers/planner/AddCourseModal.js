import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UIButton from '../../UIComponents/buttons/UIButton';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UIModal from '../../UIComponents/dialog/UIModal';
import UIScrollContainer from '../../UIComponents/containers/UIScrollContainer';

import CourseList from '../../components/course/CourseList';
import FilterMenu from '../../components/filterMenu/FilterMenu';

import { FILTER_OPTIONS_RESPONSE } from '../../fixtures/FilterOptions';

import { fetchCourses } from '../../actions/Courses';
import { getAllIds, getIsFetching } from '../../selectors/courses';
import { updateFilter } from '../../actions/Filters';
import { getFilter } from '../../selectors/filters';

const AddCourseModal = ({
  show,
  onAdd,
  onCancel,
  semesterTitle,
  /* connect props */
  courseIds,
  filters,
  isFetching,
  fetchCourses,
  updateFilter
}) => {
  const handleKeywordChange = e => {
    const keyword = e.target.value;
    //  TODO: debounce api requests
    updateFilter('search', keyword);
  };

  useEffect(() => {
    fetchCourses(filters.toJS());
  }, [fetchCourses, filters]);

  const [focusedCourseIds, setFocusedCourseIds] = useState([]);
  const handleFocus = id => {
    const containsId = focusedCourseIds.indexOf(id) !== -1;
    if (containsId) {
      setFocusedCourseIds([]);
    } else {
      setFocusedCourseIds([id]);
    }
  };

  const handleAdd = () => {
    //  TODO: implement validation
    onAdd(focusedCourseIds[0]);
    setFocusedCourseIds([]);
  };

  return (
    <UIModal show={show} onClickOutside={onCancel} width={800}>
      <UIModal.Header>
        <h2>Add Course to {semesterTitle}</h2>
        <UIModal.CloseButton onClick={onCancel} />
      </UIModal.Header>
      <UIModal.Body
        style={{ position: 'relative', padding: 0, height: '50em' }}
      >
        <FilterMenu
          value={filters.toJS()}
          options={FILTER_OPTIONS_RESPONSE}
          onFieldChange={updateFilter}
          onKeywordChange={handleKeywordChange}
        />
        <UIScrollContainer className="p-2" style={{ maxHeight: '100%' }}>
          <CourseList
            courseIds={courseIds}
            focusedCourseIds={focusedCourseIds}
            isLoading={isFetching}
            onRequestMoreCourses={fetchCourses}
            onCourseClick={handleFocus}
          />
        </UIScrollContainer>
      </UIModal.Body>
      <UIModal.Footer>
        <UIFlex justify="flex-end">
          <UIButton use="secondary" onClick={onCancel}>
            Cancel
          </UIButton>
          <UIButton onClick={handleAdd}>Add Course</UIButton>
        </UIFlex>
      </UIModal.Footer>
    </UIModal>
  );
};

const mapStateToProps = state => ({
  courseIds: getAllIds(state),
  isFetching: getIsFetching(state),
  filters: getFilter(state)
});

const mapDispatchToProps = {
  fetchCourses,
  updateFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourseModal);
