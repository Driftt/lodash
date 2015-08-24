var arrayEvery = require('../internal/arrayEvery'),
    createInvoker = require('../internal/createInvoker');

/**
 * Creates a function that checks if **all** of the `predicates` return
 * truthy when invoked with the arguments provided to the created function.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {...(Function|Function[])} predicates The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var conjed = _.conj(Boolean, isFinite);
 *
 * conjed('1');
 * // => true
 *
 * conjed(null);
 * // => false
 *
 * conjed(NaN);
 * // => false
 */
var conj = createInvoker(arrayEvery);

module.exports = conj;
