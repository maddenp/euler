/* jshint node: true */

"use strict";

var pm = require('./pm');

var digit_factorials = [];
var factorials = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(pm.factorial);
var limit = 7 * factorials[9];

var a = [3];
var f = a.map(function(x) { return factorials[x]; });

for (var n = 3; n <= limit; n++) {
  if (pm.array_sum(f) === n) digit_factorials.push(n);
  var changed = pm.array_inc(a);
  for (var i = a.length - 1; i >= a.length - changed; i--) {
    f[i] = factorials[a[i]];
  }
}

console.log(pm.array_sum(digit_factorials));
