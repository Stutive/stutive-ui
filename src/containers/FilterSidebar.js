import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UIButton from '../UIComponents/buttons/UIButton';
import UICard from '../UIComponents/containers/UICard';
import UIFormControl from '../UIComponents/form/UIFormControl';
import UISelect from '../UIComponents/inputs/UISelect';

import { getFilterFields } from '../selectors/filters';
import { updateFilter } from '../actions/Filters';

const FilterField = ({ label, onChange, options, placeholder, multi }) => {
  return (
    <UIFormControl label={label}>
      <UISelect
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        multi={multi}
      />
    </UIFormControl>
  );
};

const FilterSidebar = ({ filterFields, updateFilter }) => {
  const makeOnChange = field => value => {
    updateFilter(field, value);
  };
  const renderFilterfields = filterFields.map(filterField => {
    return (
      <FilterField
        key={filterField.field}
        label={filterField.text}
        onChange={makeOnChange(filterField.field)}
        options={filterField.options}
        placeholder={filterField.placeholder}
        multi={filterField.multi}
      />
    );
  });
  return (
    <UICard>
      <h4>Search Filters</h4>
      {renderFilterfields}
      <UIButton use="primary">Search</UIButton>
    </UICard>
  );
};

FilterSidebar.propTypes = {
  filterFields: PropTypes.any, //  Figure this shit out
  updateFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  filterFields: getFilterFields(state)
});

const mapDispatchToProps = {
  updateFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);
