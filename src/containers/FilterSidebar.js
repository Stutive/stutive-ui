import React from 'react';
import { connect } from 'react-redux';

import UIButton from '../UIComponents/buttons/UIButton';
import UICard from '../UIComponents/containers/UICard';
import UIFormControl from '../UIComponents/form/UIFormControl';
import UISelect from '../UIComponents/inputs/UISelect';

import { getFilterFields } from '../selectors/filters';

const FilterField = ({ label, options, placeholder }) => {
  return (
    <UIFormControl label={label}>
      <UISelect options={options} placeholder={placeholder} />
    </UIFormControl>
  );
};

const FilterSidebar = ({ filterFields }) => {
  const renderFilterfields = filterFields.map(field => {
    return (
      <FilterField
        label={field.text}
        options={field.options}
        placeholder={field.placeholder}
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

const mapStateToProps = state => ({
  filterFields: getFilterFields(state)
});

export default connect(mapStateToProps, null)(FilterSidebar);
