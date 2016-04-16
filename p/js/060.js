/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const pairable = (p1, p2) => {
  const n1 = p2 * Math.pow(10, pm.ndigits(p1)) + p1;
  const n2 = p1 * Math.pow(10, pm.ndigits(p2)) + p2;
  return pm.prime.check(n1) && pm.prime.check(n2) ? true : false;
};

const f = (p, q, pairs, sum, depth) => {
  if (pairable(p, q)) {
    sum += q;
    if (depth === goal) {
      if (sum + p < low) low = sum + p;
    } else {
      Object.keys(pairs).forEach(x => {
        f(p, pairs[x].val, pairs[x].sub, sum, depth + 1);
      });
      pairs[p] = {val: p, sub: {}};
    }
  }
};

const goal = 5;

var i = 0;
var low = Number.MAX_SAFE_INTEGER;
var roots = {};

while (true) {
  var p = pm.prime.at(i++);
  if (p === 2 || p === 5) continue;
  Object.keys(roots).forEach(q => {
    f(p, roots[q].val, roots[q].sub, 0, 2);
  });
  roots[p] = {val: p, sub: {}};
  if (p > low) break;
}

console.log(low);
