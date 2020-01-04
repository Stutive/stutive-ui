/**
 *  Formats a single credit hour value
 *
 *  @param {Number} creditHour
 *  @returns {String}
 */
function formatCreditHour(creditHour, multi = false) {
  if (creditHour === 1 && !multi) {
    return `${creditHour} hour`;
  }
  return `${creditHour} hours`;
}

/**
 *  Format an array of credit hour values
 *
 *  @param {Array} creditHoursArr
 *  @returns {String}
 */
export function formatCreditHours(creditHoursArr) {
  if (
    !creditHoursArr ||
    !Array.isArray(creditHoursArr) ||
    creditHoursArr.length === 0
  ) {
    return '';
  }

  if (creditHoursArr.length === 1) {
    return formatCreditHour(creditHoursArr[0]);
  }

  const creditHoursArrCopy = [...creditHoursArr].sort();
  const lastValue = creditHoursArrCopy.pop();
  const formattedLastValue = formatCreditHour(lastValue, true);
  return `${creditHoursArrCopy.join(', ')} or ${formattedLastValue}`;
}
