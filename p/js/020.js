/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

for (var i = 2, a = [1], n = 100; i < n + 1; i++) {
  a = pm.array_times_int(a, i);
}

console.log(a.reduce(function (m, e) { return m + e; }, 0));
