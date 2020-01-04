import React from 'react';
import PropTypes from 'prop-types';

import { formatCreditHours } from './lib/format';

const FormattedCreditHours = ({ value }) => {
  return <span>{formatCreditHours(value)}</span>;
};

FormattedCreditHours.propTypes = {
  value: PropTypes.array
};

export default FormattedCreditHours;
