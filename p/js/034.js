/* jshint node: true */

"use strict";

var pm = require('./pm');

function sum_of_factorialized_digits(n, factorials) {
  return pm.array_sum(pm.n2a_decimal(n).map(function(n) { return factorials[n]; }));
}

var digit_factorials = [];
var factorials = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(pm.factorial);
var filename = '034.dat';
var theoretical_limit = 7 * pm.factorial(9);
var experimental_limit = pm.readfile(filename);
var limit = experimental_limit || theoretical_limit;

for (var n = 3; n <= limit; n++) {
  if (sum_of_factorialized_digits(n, factorials) === n) {
    digit_factorials.push(n);
  }
}

if (! experimental_limit) {
  pm.writefile(filename, Math.max.apply(null, digit_factorials));
}

console.log(pm.array_sum(digit_factorials));
