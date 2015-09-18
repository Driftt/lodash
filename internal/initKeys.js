import baseTimes from './baseTimes';
import isArguments from '../lang/isArguments';
import isArray from '../lang/isArray';
import isLength from './isLength';
import isString from '../lang/isString';

/**
 * Initializes an array of property names based on `object`. If `object` is
 * an array, `arguments` object, or `string` its index keys are returned,
 * otherwise an empty array is returned.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the initialized array of property names.
 */
function initKeys(object) {
  var length = object ? object.length : 0;
  length = (length && isLength(length) &&
    (isArray(object) || isString(object) || isArguments(object)) && length) || 0;

  return baseTimes(length, String);
}

export default initKeys;
