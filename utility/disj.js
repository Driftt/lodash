var arraySome = require('../internal/arraySome'),
    createInvoker = require('../internal/createInvoker');

/**
 * Creates a function that checks if **any** of the `predicates` return
 * truthy when invoked with the arguments provided to the created function.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {...(Function|Function[])} predicates The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var disjed = _.disj(Boolean, isFinite);
 *
 * disjed('1');
 * // => true
 *
 * disjed(null);
 * // => true
 *
 * disjed(NaN);
 * // => false
 */
var disj = createInvoker(arraySome);

module.exports = disj;
