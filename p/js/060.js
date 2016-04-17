/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const cat = (a, b) => b * Math.pow(10, pm.ndigits(a)) + a;
const goal = 5;
const intsort = (a, b) => a - b;

const pairable = (p1, p2) => (
  pm.prime.check(cat(p1, p2)) && pm.prime.check(cat(p2, p1)) ? true : false
);

const search = (p, q, pairs, sum, depth) => {
  q = parseInt(q);
  if (pairable(p, q)) {
    sum += q;
    if (depth === goal) {
      console.log(sum + p);
      process.exit();
    } else {
      Object.keys(pairs).sort(intsort).forEach(x => {
        search(p, x, pairs[x], sum, depth + 1);
      });
      pairs[p] = {};
    }
  }
};

var i = 0;
var roots = {};

while (true) {
  var p = pm.prime.at(i++);
  Object.keys(roots).sort(intsort).forEach(q => {
    search(p, q, roots[q], 0, 2);
  });
  roots[p] = {};
}
