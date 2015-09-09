/* jshint node: true */

"use strict";

function array_sum(a, init) {
  return (a.reduce(function(m, e) { return m + e; }, init));
}

function factorial(n) {
  for (var i = n, f = 1; i > 1; i--) f *= i;
  return f;
}

var x = 999999;

var source_digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var answer_digits = [];

for (var n = source_digits.length - 1; x > 0; n--) {
  var f = factorial(n);
  var m = Math.floor(x/f);
  x -= f * m;
  answer_digits.push(source_digits[m]);
  source_digits.splice(m,1);
}

console.log(array_sum(answer_digits.concat(source_digits), ''));
