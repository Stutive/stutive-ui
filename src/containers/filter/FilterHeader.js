import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getFilterFields } from '../../selectors/filters';

import FilterMenu from '../../components/filterMenu/FilterMenu';

const FilterHeader = ({ filterFields = [], setFilter }) => {
  return (
    <FilterMenu
      options={{
        fields: filterFields.toJS()
      }}
      onChange={setFilter}
    />
  );
};

FilterHeader.propTypes = {
  /*  @connect  */
  filterFields: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  filterFields: getFilterFields(state)
});

export default connect(mapStateToProps, null)(FilterHeader);
