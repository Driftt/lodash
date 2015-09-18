import arrayMap from '../internal/arrayMap';
import createInvoker from '../internal/createInvoker';

/**
 * Creates a function that invokes `iteratees` with the arguments provided
 * to the created function and returns their results.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {...(Function|Function[])} iteratees The iteratees to invoke.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var juxted = _.juxt(Math.max, Math.min);
 *
 * juxted(1, 2, 3, 4);
 * // => [4, 1]
 */
var juxt = createInvoker(arrayMap);

export default juxt;
