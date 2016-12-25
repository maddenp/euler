/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const g = (ns, n) => {
  const h = Object.assign({}, ns);
  h[n]--;
  if (h[n] === 0) delete h[n];
  n++;
  h[n] = h[n] ? h[n] + 1 : 1;
  return h;
};

const f = (s0, p0, ns) => {
  const candidates = [];
  const q = [];
  var s1 = s0 + 1;
  Object.keys(ns).forEach(n0 => {
    n0 = parseInt(n0);
    var p1 = p0 / n0 * (n0 + 1);
    var d = s1 - p1;
    if (d === 0) candidates.push(s1);
    if (d > 0) {
      var z = g(ns, n0);
      q.push([s1, p1, z]);
    }
  });
  if (candidates.length === 0) {
    q.forEach(x => {
      let c = f(x[0], x[1], x[2]);
      if (c) candidates.push(c);
    });
  }
  return pm.array_min(candidates);
};

const limit = 12;
const mpsns = new Set([]); // minimal product-sum numbers

for (var k = 2; k <= limit; k++) {
  var mpsn = f(k + 1, 2, {1: k - 1, 2: 1});
  mpsns.add(mpsn);
}

var sum = 0;
for (let n of mpsns) sum += n;
console.log(sum);
