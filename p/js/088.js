/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const f = (a0, s0, p0) => {
  const candidates = [];
  const q = [];
  var s1 = s0 + 1;
  for (let n of new Set(a0)) {
    var a1 = a0.slice();
    a1[a1.indexOf(n)]++;
    var p1 = p0 / n * (n + 1);
    var d = s1 - p1;
    if (d === 0) candidates.push(s1);
    if (d > 0) q.push([a1, s1, p1]);
  }
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
  let a = [2];
  for (var i = 1; i < k; i++) a.push(1);
  var x = f(a, k + 1, 2);
  mpsns.add(x);
}

var sum = 0;
for (let n of mpsns) sum += n;
console.log(sum);
