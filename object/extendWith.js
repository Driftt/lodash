import copyObjectWith from '../internal/copyObjectWith';
import createAssigner from '../internal/createAssigner';
import keysIn from './keysIn';

/**
 * This method is like `_.assignWith` except that it iterates over own and
 * inherited source properties.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.extendWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var extendWith = createAssigner(function(object, source, customizer) {
  copyObjectWith(source, keysIn(source), object, customizer);
});

export default extendWith;
