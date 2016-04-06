/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const fail = (p1, p2) => {
  const n1 = p2 * Math.pow(10, pm.ndigits(p1)) + p1;
  const n2 = p1 * Math.pow(10, pm.ndigits(p2)) + p2;
  return gprime.check(n1) && gprime.check(n2) ? false : true;
};

const f = (a, p, sum, limit) => {
  if (a.some(n => fail(n, p))) return false;
  if (a.length + 1 === limit) {
    if (sum < low) low = sum;
    return true;
  }
  const prime = pm.prime();
  do { var x = prime.next(); } while (x !== p);
  while (true) {
    x = prime.next();
    var newsum = sum + x;
    if (newsum > low) break;
    if (f(a.concat(p), x, newsum, limit)) break;
  }
  return false;
};

const gprime = pm.prime();

var low = Number.MAX_SAFE_INTEGER;

var p = gprime.next(); // move past 2, which is no good

while (true) {
  var p = gprime.next();
  f([], p, p, 5);
  if (p > low) break;
}

console.log(low);
