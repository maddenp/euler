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
  var i = 0;
  do { var q = gprime.prime_at(i++); } while (q !== p);
  while (true) {
    q = gprime.prime_at(i++);
    var newsum = sum + q;
    if (newsum > low) break;
    if (f(a.concat(p), q, newsum, limit)) break;
  }
  return false;
};

const gprime = pm.prime;

var low = Number.MAX_SAFE_INTEGER;

var i = 1;

while (true) {
  var p = gprime.prime_at(i++);
  f([], p, p, 4);
  if (p > low) break;
}

console.log(low);
