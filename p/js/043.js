/* jshint node: true */

"use strict";

var pm = require('./pm');

function test(a) {
  if (a[0] === 0) return false;
  if ((a[3] & 1) !== 0) return false;
  if ((a[2] + a[3] + a[4]) % 3 !== 0) return false;
  if (a[5] % 5 !== 0) return false;
  if (pm.a2n(a.slice(4, 7)) % 7 !== 0) return false;
  if (pm.a2n(a.slice(5, 8)) % 11 !== 0) return false;
  if (pm.a2n(a.slice(6, 9)) % 13 !== 0) return false;
  if (pm.a2n(a.slice(7, 10)) % 17 !== 0) return false;
  return true;
}

var a = pm.range(0, 9);
var answers = [];

pm.permutations(a.length, a, function(x) {
  if (test(x)) answers.push(pm.a2n(x))
});

console.log(pm.array_sum(answers));
