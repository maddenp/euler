/* jshint node: true */

"use strict";

var pm = require('./pm');

var result = 0;

function update_result(a) {
  var n = pm.a2n(a);
  if (pm.is_prime(n) && n > result) {
    result = n;
  }
}

for (var d = 9; d > 0; d--) {
  var a = pm.range(1, d);
  pm.permutations(a.length, a, update_result);
  if (result > 0) {
    console.log(result);
    break;
  }
}
