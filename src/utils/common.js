/**
 * Returns true if the value is empty, undefined or null
 * @param {string} value - text value to check
 * @returns {boolean}
 */
export const isEmpty = value => {
  if (value === undefined || value === null) return true;

  if (typeof value === 'string' && value.trim().length === 0) return true;

  return false;
};

/**
 * Converts the value in kilogram format
 * @param {number} value to convert
 * @returns {string}
 */
export const convertToWeightFormat = value => {
  if (isEmpty(value)) return '0kg';

  return `${(value / 10).toFixed(1)}kg`;
};

/**
 * onverts the value in meters format
 * @param {number} value to convert
 * @returns {string}
 */
export const convertToHeightFormat = value => {
  if (isEmpty(value)) return '0m';

  return `${(value / 10).toFixed(1)}m`;
};
