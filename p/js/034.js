/* jshint node: true */

"use strict";

var pm = require('./pm.js');

function sum_of_factorialized_digits(n, factorials) {
  return pm.array_sum(pm.n2a(n).map(function(n) { return factorials[n]; }));
}

var digit_factorials = [];
var factorials = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(pm.factorial);
var limit = 2540160; // 7 * 9!

for (var n = 3; n <= limit; n++) {
  if (sum_of_factorialized_digits(n, factorials) === n) {
    digit_factorials.push(n);
  }
}

console.log(pm.array_sum(digit_factorials));
