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

const search = (p, q, roots, sum, depth) => {
  var pairs = roots.o[q];
  q = parseInt(q);
  if (pairable(p, q)) {
    sum += q;
    if (depth === goal) {
      console.log(sum + p);
      process.exit();
    } else {
      pairs.a.forEach(r => search(p, r, pairs, sum, depth + 1));
      pairs.a.push(p);
      pairs.o[p] = node();
    }
  }
};

var i = 0;
var roots = node();

while (true) {
  var p = pm.prime.at(i++);
  roots.a.forEach(q => search(p, q, roots, 0, 2));
  roots.a.push(p);
  roots.o[p] = node();
}
