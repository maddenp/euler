/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const pass = (p1, p2) => {
  const n1 = p2 * Math.pow(10, pm.ndigits(p1)) + p1;
  const n2 = p1 * Math.pow(10, pm.ndigits(p2)) + p2;
  return gprime.check(n1) && gprime.check(n2) ? true : false;
};

const f = (a, p, sum, limit) => {
  if (a.every(n => pass(n, p))) {
    if (a.length + 1 === limit) {
      if (sum < low) low = sum;
    } else {
      const prime = pm.prime();
      do { var x = prime.next(); } while (x !== p);
      while (true) {
        x = prime.next();
        var newsum = sum + x;
        if (newsum > low) break;
        f(a.concat(p), x, newsum, limit);
      }
    }
  }
};

const gprime = pm.prime();

var low = Number.MAX_SAFE_INTEGER;

var p = gprime.next(); // move past 2, which is no good

while (true) {
  var p = gprime.next();
  f([], p, p, 4);
  if (p > low) break;
}

console.log(low);
