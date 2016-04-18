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
  sum += q;
  if (sum >= low) return true;
  if (pairable(p, q)) {
    if (depth === goal && sum + p < low) {
      low = sum + p;
    } else {
      const keys = Object.keys(roots[q]);
      for (var i = 0; i < keys.length; i++) {
        if (search(p, keys[i], roots[q], sum, depth + 1)) {
          delete roots[q][keys[i]];
        }
      }
      roots[q][p] = {};
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
