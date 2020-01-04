import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UIButton from '../../UIComponents/buttons/UIButton';
import UICard from '../../UIComponents/containers/UICard';
import UIFormControl from '../../UIComponents/form/UIFormControl';
import UISelect from '../../UIComponents/inputs/UISelect';

import { getFilter, getFilterFields } from '../../selectors/filters';
import { updateFilter, applyFilter } from '../../actions/Filters';

const FilterField = ({
  label,
  onChange,
  options,
  placeholder,
  multi,
  searchable,
  value
}) => {
  return (
    <UIFormControl label={label}>
      <UISelect
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        multi={multi}
        searchable={searchable}
        value={value}
      />
    </UIFormControl>
  );
};

const FilterSidebar = ({ filter, filterFields, updateFilter, onSearch }) => {
  if (!filterFields) return null;

  const makeOnChange = field => value => {
    updateFilter(field, value);
  };
  const renderFilterfields = filterFields.map(filterField => {
    const value = filter.get(filterField.field);
    return (
      <FilterField
        key={filterField.field}
        label={filterField.text}
        onChange={makeOnChange(filterField.field)}
        options={filterField.options}
        placeholder={filterField.placeholder}
        multi={filterField.multi}
        searchable={filterField.searchable}
        value={value}
      />
    );
  });
  return (
    <UICard>
      <h4>Search Filters</h4>
      {renderFilterfields}
      <UIButton use="primary" onClick={onSearch}>
        Search
      </UIButton>
    </UICard>
  );
};

FilterSidebar.propTypes = {
  filterFields: PropTypes.any, //  Figure this shit out
  updateFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  filterFields: getFilterFields(state),
  filter: getFilter(state)
});

const mapDispatchToProps = {
  updateFilter,
  onSearch: applyFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);
