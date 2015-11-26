/* jshint node: true */

"use strict";

var pm = require('./pm');

for (var i = 2, a = [1], n = 100; i < n + 1; i++) {
  pm.array_mult(a, i);
}

console.log(a.reduce(function(m, e) { return m + e; }, 0));
