/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const cat = (a, b) => b * Math.pow(10, pm.ndigits(a)) + a;

const goal = 5;

const pairable = (p1, p2) => (
  pm.prime.check(cat(p1, p2)) && pm.prime.check(cat(p2, p1)) ? true : false
);

const max_clique_with = (r1, roots) => {
  var clique = [r1];
  var p = roots[r1].val;
  Object.keys(roots).forEach(r2 => {
    var q = roots[r2].val;
    if (q !== p && clique.every(r3 => roots[r3].pairables[r2])) clique.push(r2);
  });
  if (clique.length === goal) {
    return pm.array_sum(clique.map(n => parseInt(n)));
  }
};

var chunksize = 1000;
var limit = chunksize;
var low = Number.MAX_SAFE_INTEGER;
var p = 0;
var primeidx = 0;
var roots = {};

while (p < low) {

  while (p < limit) {
    var p = pm.prime.at(primeidx++);
    if (p === 2 || p === 5) continue;
    if (p > low) break;
    var s = p.toString();
    roots[s] = {val: p, pairables: {}};
    Object.keys(roots).forEach(r => {
      var q = roots[r].val;
      if (q !== s) {
        if (pairable(p, q)) {
          roots[s].pairables[r] = q;
          roots[r].pairables[s] = p;
        }
      }
    });
  }

  Object.keys(roots).forEach(r => {
    var n = max_clique_with(r, roots);
    if (n && n < low) low = n;
  });

  limit = low === Number.MAX_SAFE_INTEGER ? limit + chunksize : low;

}

console.log(low);
