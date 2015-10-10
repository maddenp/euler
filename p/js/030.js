/* jshint node: true */
/*jslint indent: 2 */
/*jslint white: true */

"use strict";

var exponent = 5;

function array_sum(a) {
  return (a.reduce(function(m, e) { return m + e; }, 0));
}

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

function n2a(n) {
  var a = [];
  while (n > 0) {
    a.splice(0, 0, n % 10);
    n = Math.floor(n / 10);
  }
  return a;
}

var matches = [];

for (var n = 2; n < limit(exponent); n++) {
  if (array_sum(lift(n2a(n), exponent)) === n) matches.push(n);
}

console.log(array_sum(matches));
