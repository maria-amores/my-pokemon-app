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
