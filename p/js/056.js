/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var max = 0;

for (var b = 1; b <= 100; b++) {
  var a = [1];
  for (var e = 1; e <= 100; e++) {
    a = pm.array_mult(a, b);
    var sum = pm.array_sum(a);
    if (sum > max) max = sum;
  }
}

console.log(max);
