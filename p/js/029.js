/* jshint node: true */

"use strict";

var pm = require('./pm');

function arr2str(a) {
  return (a.reduce(function(m, e) { return m + e; }, ''));
}

function exponentiate(base, exponent) {
  var a = [base];
  for (var i = 2; i <= exponent; i++) pm.array_mult(a, base);
  return a;
}

var limit = 100;
var ns = [];

for (var a = 2; a <= limit; a++) {
  for (var b = 2; b <= limit; b++) {
    ns.push(arr2str(exponentiate(a, b)));
  }
}

var sorted = ns.sort(function(n1, n2) { return n1 - n2; });

var uniques = sorted.reduce(function(m, e) { return m[m.length - 1] === e ? m : m.concat([e]); }, []);

console.log(uniques.length);
