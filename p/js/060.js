/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const cat = (a, b) => parseInt(a + b);

const goal = 5;

const pairable = (p1, p2) => (
  pm.prime.check(cat(p1, p2)) && pm.prime.check(cat(p2, p1)) ? true : false
);

const max_clique_with = (p, roots) => {
  var clique = [p];
  Object.keys(roots).forEach(q => {
    if (q !== p && clique.every(r => roots[r][q])) clique.push(q);
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
    roots[p] = {};
    Object.keys(roots).forEach(q => {
      if (q !== p) {
        if (pairable(p, q)) {
          roots[p][q] = true;
          roots[q][p] = true;
        }
      }
    });
  }

  Object.keys(roots).forEach(p => {
    var sum = max_clique_with(p, roots);
    if (sum && sum < low) low = sum;
  });

  limit = low === Number.MAX_SAFE_INTEGER ? limit + chunksize : low;

}

console.log(low);
