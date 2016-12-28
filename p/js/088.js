/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

// Kudos to user 'under-score' in the forum thread!

const pm = require('./pm');

const limit = 12000;
const mpsns = {}; // minimal product-sum numbers

const f = (p, s, n, start) => {
  var k = n + p - s;
  if (k > limit) return;
  if (!mpsns[k] || p < mpsns[k]) mpsns[k] = p;
  for (var x = start; x < 2 * Math.floor(limit / p) + 1; x++) {
    f(p * x, s + x, n + 1, x);
  }
};

f(1, 0, 0, 2);

console.log(pm.array_sum(Array.from(Object.keys(mpsns).reduce((m, e) => m.add(mpsns[e]), new Set([])))) - 1);
