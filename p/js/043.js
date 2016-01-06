/* jshint node: true */

"use strict";

var pm = require('./pm');

function test(a) {
  if (a[0] === 0) return false;
  if (a[3] % 2 !== 0) return false;
  if (a[5] % 5 !== 0) return false;
  var divisors = [2, 3, 5, 7, 11, 13, 17];
  for (var i = 7; i >= 1; i--) {
    if (pm.a2n(a.slice(i, i + 3)) % divisors[i - 1] !== 0) {
      return false;
    }
  }
  return true;
}

var a = pm.range(0, 9);
var answers = [];
pm.permutations(a.length, a, function(x) { if (test(x)) answers.push(pm.a2n(x)); });
console.log(pm.array_sum(answers));
