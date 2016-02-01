/* jshint node: true */

"use strict";

var pm = require('./pm');

var digit_factorials = [];
var factorials = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(pm.factorial);
var limit = 7 * factorials[9];

var a = [3];
for (var n = 3; n <= limit; n++) {
  if (pm.array_sum(a.map(function(x) { return factorials[x]; })) === n) {
    digit_factorials.push(n);
  }
  pm.array_inc(a);
}

console.log(pm.array_sum(digit_factorials));
