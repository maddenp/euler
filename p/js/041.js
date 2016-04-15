/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

/* NOTE: Since 1+2+3+4+5+6+7+8+9=45 and 1+2+3+4+5+6+7+8=36, and because 45 and
 *       36 are both divisible by 3, all 9-digit and 8-digit pandigitals are
 *       divisible by 3, and therefore composite.
 */

const pm = require('./pm');

const prime = pm.prime;

var limit = 7;
var result = 0;

function update_result(a) {
  var n = pm.a2n(a);
  if (prime.check(n) && n > result) {
    result = n;
  }
}

for (var d = limit; d > 0; d--) {
  var a = pm.range(1, d);
  pm.permutations(a.length, a, update_result);
  if (result > 0) {
    console.log(result);
    break;
  }
}
