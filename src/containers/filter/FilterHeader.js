import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateFilter } from '../../actions/Filters';
import { getFilterFields, getFilter } from '../../selectors/filters';

import FilterMenu from '../../components/filterMenu/FilterMenu';

const FilterHeader = ({ filterFields = [], updateFilter, filter }) => {
  return (
    <FilterMenu
      value={filter.toJS()}
      options={{
        fields: filterFields.toJS()
      }}
      onFieldChange={updateFilter}
    />
  );
};

FilterHeader.propTypes = {
  /*  @connect  */
  filterFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  filterFields: getFilterFields(state),
  filter: getFilter(state)
});

const mapDispatchToProps = {
  updateFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterHeader);
