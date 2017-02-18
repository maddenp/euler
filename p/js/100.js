/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

/*
 * The 'blue' values are solutions to (b/n)((b-1)/(n-1)) = 0.5 and are produced
 * by the recurrence relation given at https://oeis.org/A011900. What remains is
 * to know when to stop. The equation above can be rewritten
 *
 * (b/n)((b - 1)/(n - 1))       = 1/2               |
 * (b^2 - b)/(n^2 - n)          = 1/2               |
 * 2(b^2 - b)                   = n^2 - n           |
 * 2(b^2 - b)                   = (n - 1/2)^2 - 1/4 | complete the n square
 * 2(b^2 - b) + 1/4             = (n - 1/2)^2       |
 * sqrt(2(b^2 - b) + 1/4)       = n - 1/2           |
 * sqrt(2(b^2 - b) + 1/4) + 1/2 = n                 |
 * sqrt(2(b^2 - b) + 1/4) + 1/2 > 1e12              | constraint on n
 * sqrt(2(b^2 - b) + 1/4)       > 1e12 - 1/2        |
 * 2(b^2 - b) + 1/4             > 1e24 - 1e12 + 1/4 | square both sides
 * 2(b^2 - b)                   > 1e24 - 1e12       |
 *
 * Since b^2 will overflow, the computation is done in bigints.
 *
 */

const limit = pm.s2a('999999999999000000000000'); // 1e24 - 1e12

var a0 = 1;
var a1 = 3;

while (true) {
  var a2 = 6 * a1 - a0 - 2;
  var b = pm.n2a(a2);
  var c = pm.array_times_int(pm.array_sub(pm.array_times_array(b, b), b), 2);
  if (pm.array_comp(c, limit) > 0) break;
  a0 = a1;
  a1 = a2;
}

console.log(a2);
