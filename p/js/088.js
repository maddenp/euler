/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const g = (m, max, x, p, s, c) => {
  for (var y = 2; y <= x; y++) {
    var p1 = p * y;
    var s1 = s + y - 1;
    if (p1 === s1) c.add(p1);
    if (p1 > s1 || p1 > max || s1 > max) break;
    if (m > 0) g(m - 1, max, y, p1, s1, c);
  }
};

const f = (n) => {
  const c = new Set([]);
  const max = 2 * n;
  const m = Math.floor(Math.log2(max));
  for (var x = 2; x <= n; x++) g(m - 2, max, x, x, x + n - 1, c);
  return pm.array_min(Array.from(c));
};

const limit = 12000;
const mpsns = new Set([]); // minimal product-sum numbers

for (var k = 2; k <= limit; k++) mpsns.add(f(k));

console.log(pm.array_sum(Array.from(mpsns)));
