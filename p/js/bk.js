/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const intersection = (a1, a2) => {
  const a3 = [];
  const x1 = a1.length < a2.length ? a1 : a2;
  const x2 = a1.length < a2.length ? a2 : a1;
  var from = 0;
  for (var i = 0; i < x1.length; i++) {
    var found_at = x2.indexOf(x1[i], from);
    if (found_at !== -1) {
      a3.push(x1[i]);
      from = found_at;
    }
  }
  return a3;
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
  pm.miller_rabin(parseInt(p1 + p2)) && pm.miller_rabin(parseInt(p2 + p1))
);

const goal = 5;
const limit = 1051;
const pairs = {};

for (var i = 0; i < limit; i++) {
  make_pairs(pm.prime.at(i), pairs);
}

var min = Number.MAX_SAFE_INTEGER;

const bron_kerbosch = (pairs, r, p, x) => {
  if (p.length === 0 && x.length === 0 && r.length === goal) {
    var sum = pm.array_sum(r);
    if (sum < min) min = sum;
  } else {
    p = p.slice();
    x = x.slice();
    p.slice().forEach(v => {
      bron_kerbosch(pairs, r.concat(v), intersection(p, pairs[v]), intersection(x, pairs[v]));
      p.splice(p.indexOf(v), 1);
      x.push(v);
    });
  }
};

bron_kerbosch(pairs, [], Object.keys(pairs).map(s => parseInt(s)), []);

if (min === Number.MAX_SAFE_INTEGER) {
  console.log('No ' + goal + '-clique found');
} else if (pm.prime.primes[pm.prime.primes.length - 1] * goal < min) {
  console.log('Insufficient search space');
} else {
  console.log(min);
}
