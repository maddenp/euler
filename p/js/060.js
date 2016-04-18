/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const cat = (a, b) => b * Math.pow(10, pm.ndigits(a)) + a;
const goal = 5;

const pairable = (p1, p2) => (
  pm.prime.check(cat(p1, p2)) && pm.prime.check(cat(p2, p1)) ? true : false
);

const search = (p, q, roots, sum, depth) => {
  q = parseInt(q);
  if (pairable(p, q)) {
    sum += q;
    if (sum < low) {
      if (depth === goal && sum + p < low) {
        low = sum + p;
      } else {
        var pairs = roots[q];
        const keys = Object.keys(pairs);
        for (var i = 0; i < keys.length; i++) {
          if (search(p, keys[i], pairs, sum, depth + 1)) {
            delete pairs[keys[i]];
          }
        }
        pairs[p] = {};
      }
      return false;
    } else {
      return true;
    }
  }
};

var primeidx = 0;
var low = Number.MAX_SAFE_INTEGER;
var roots = {};

while (true) {
  var p = pm.prime.at(primeidx++);
  if (p > low) break;
  if (p === 2 || p === 5) continue;
  const keys = Object.keys(roots);
  for (var i = 0; i < keys.length; i++) {
    if (search(p, keys[i], roots, 0, 2)) {
      delete roots[keys[i]];
    }
  }
  roots[p] = {};
}

console.log(low);
