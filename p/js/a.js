/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const g = (m, c, x, p, s, candidates) => {
  if (m < 0) return false;
  for (var y = 2; y <= x; y++) {
    var p1 = p * y;
    var s1 = s + y - 1;
//     if (p1 === s1) return p1;
    if (p1 === s1) candidates.add(p1);
    if (p1 > c || s1 > c) return false;
//     var v = g(m - 1, c, y, p1, s1);
//     if (v) return v;
    g(m - 1, c, y, p1, s1, candidates);
  }
};

const f = (n) => {
  const candidates = new Set([]);
  const c = 2 * n;
  const m = Math.floor(Math.log2(c));
  var p = Math.pow(2, m);
  var s = 2 * m + n - m;
//   if (p === s) return p;a
  if (p === s) candidates.add(p);
  for (var x = 3; x <= n; x++) {
//     var v = g(m - 2, c, x, x, x + n - 1);
//     if (v) return v;
    g(m - 2, c, x, x, x + n - 1, candidates);
  }
  console.log(n,candidates);
  return pm.array_min(Array.from(candidates));
};

const limit = 6;
const mpsns = new Set([]); // minimal product-sum numbers

for (var k = 2; k <= limit; k++) {
  var mpsn = f(k);
  mpsns.add(mpsn);
  console.log(`${k},${mpsn}`);
}

console.log(pm.array_sum(Array.from(mpsns)));
