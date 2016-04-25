/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const intersection = (a1, a2) => {
  const isin = a => e => a.indexOf(e) !== -1;
  return a1.length < a2.length ? a1.filter(isin(a2)) : a2.filter(isin(a1));
};

const make_pairs = (p, pairs) => {
  if (!pairs[p]) {
    pairs[p] = [];
    Object.keys(pairs).forEach(q => {
      if (p !== q) {
        if (pairable(p, q)) {
          pairs[p].push(q);
          pairs[q].push(p);
        }
      }
    });
  }
};

const pairable = (p1, p2) => (
  pm.prime.check(parseInt(p1 + p2)) && pm.prime.check(parseInt(p2 + p1))
);

const goal = 5;
const limit = 1051;
const pairs = {};

for (var i = 0; i < limit; i++) {
  make_pairs(pm.prime.at(i), pairs);
}

var min = Number.MAX_SAFE_INTEGER;

const bron_kerbosch = (pairs, r, p, x, depth) => {
  if (p.length === 0 && x.length === 0 && r.length === goal) {
    var sum = pm.array_sum(r);
    if (sum < min) min = sum;
  } else {
    p = p.slice();
    x = x.slice();
    p.slice().forEach(v => {
      bron_kerbosch(pairs, r.concat(v), intersection(p, pairs[v]), intersection(x, pairs[v]), depth+1);
      p.splice(p.indexOf(v), 1);
      x.push(v);
    });
  }
};

bron_kerbosch(pairs, [], Object.keys(pairs).map(s => parseInt(s)), [], 0);

console.log(min);
