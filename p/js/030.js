/* jshint node: true */

"use strict";

var exponent = 5;

var pm = require('./pm.js');

function lift(a, exponent) {
  return a.map(function(n) { return Math.pow(n, exponent); });
}

function limit(exponent) {
  var goal = 9, max, ndigits = 1;
  while ((max = Math.pow(9, exponent) * ndigits) >= goal) {
    goal = goal * 10 + 9;
    ndigits++;
  }
  return max;
}

var matches = [];

for (var n = 2; n < limit(exponent); n++) {
  if (pm.array_sum(lift(pm.n2a(n), exponent)) === n) matches.push(n);
}

console.log(pm.array_sum(matches));
