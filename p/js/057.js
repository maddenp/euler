/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var a1 = [3], a2 = [7];
var b1 = [2], b2 = [5];

var count = 0;

for (var i = 0; i < 998; i++) {
  var ax = pm.array_add(pm.array_mult(a2, 2), a1);
  var bx = pm.array_add(pm.array_mult(b2, 2), b1);
  a1 = a2; a2 = ax;
  b1 = b2; b2 = bx;
  if (ax.length > bx.length) ++count;
}

console.log(count);

/* Notes
 *
 *   Numerator, see: https://oeis.org/A001333
 * Denominator, see: https://oeis.org/A000129
 *
 */
