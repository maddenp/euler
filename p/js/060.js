/* jshint node: true */
/* jshint esversion: 6 */
/* jshint loopfunc: true */

"use strict";

const pm = require('./pm');

const cat = (a, b) => b * Math.pow(10, pm.ndigits(a)) + a;
const goal = 5;
const node = () => ({a: [], o: {}});

const pairable = (p1, p2) => (
  pm.prime.check(cat(p1, p2)) && pm.prime.check(cat(p2, p1)) ? true : false
);

const prune = (q, roots) => {
  roots.a.splice(roots.a.indexOf(q), 1);
  delete roots.o[q];
};

const search = (p, q, roots, sum, depth) => {
  var pairs = roots.o[q];
  q = parseInt(q);
  if (pairable(p, q)) {
    sum += q;
    if (sum < low) {
      if (depth === goal && sum + p < low) {
        low = sum + p;
      } else {
        for (var i = 0; i < pairs.a.length; i++) {
          if (search(p, pairs.a[i], pairs, sum, depth + 1)) {
            prune(q, roots, depth);
          }
        }
        pairs.a.push(p);
        pairs.o[p] = node();
      }
      return false;
    } else {
      prune(q, roots, depth);
      return true;
    }
  }
};

var primeidx = 0;
var low = Number.MAX_SAFE_INTEGER;
var roots = node();

while (true) {
  var p = pm.prime.at(primeidx++);
  if (p > low) break;
  if (p === 2 || p === 5) continue;
  for (var i = 0; i < roots.a.length; i++) {
    if (search(p, roots.a[i], roots, 0, 2)) {
      prune(q, roots, 0);
    }
  }
  roots.a.push(p);
  roots.o[p] = node();
}

console.log(low);
