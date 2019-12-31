import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DEVICE_TYPE_ENUM } from '../UIComponents/StyleTokens/sizes';
import UIButton from '../UIComponents/buttons/UIButton';
import UICard from '../UIComponents/containers/UICard';
import UIContainer from '../UIComponents/containers/UIContainer';
import UIFormControl from '../UIComponents/form/UIFormControl';
import UISelect from '../UIComponents/inputs/UISelect';
import useDeviceType from '../UIComponents/lib/useDeviceType';

import FilterMenu from '../components/filterMenu/FilterMenu';

import { getFilterFields } from '../selectors/filters';
import { updateFilter, applyFilter } from '../actions/Filters';

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

const FilterSidebar = ({ filterFields, updateFilter, onSearch }) => {
  const deviceType = useDeviceType();

  if (!filterFields) return null;

  if (
    deviceType === DEVICE_TYPE_ENUM.PHONE ||
    deviceType === DEVICE_TYPE_ENUM.PHABLET
  ) {
    return (
      <FilterMenu
        options={{
          fields: filterFields.toJS()
        }}
        onChange={val => console.log(val)}
      />
    );
  }

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
    <UIContainer className="mt-3">
      <UICard>
        <h4>Search Filters</h4>
        {renderFilterfields}
        <UIButton use="primary" onClick={onSearch}>
          Search
        </UIButton>
      </UICard>
    </UIContainer>
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
  updateFilter,
  onSearch: applyFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);
