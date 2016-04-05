/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

// [3, 7, 109, 673] => 792

const gprime = pm.prime();

const fail = (p1, p2) => {
  const n1 = p2 * Math.pow(10, pm.ndigits(p1)) + p1;
  const n2 = p1 * Math.pow(10, pm.ndigits(p2)) + p2;
  return gprime.check(n1) && gprime.check(n2) ? false : true;
};

const f = (a, p, sum, limit) => {
  if (a.some(n => fail(n, p))) {
    return;
  }
  if (a.length + 1 === limit) {
    if (sum < low) {
//       console.log(a.concat(p), sum);
      low = sum;
    }
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
};

var low = Number.MAX_SAFE_INTEGER; //12596849;

do { var p = gprime.next(); } while (p !== 3);

while (true) {
  f([], p, p, 5);
  p = gprime.next();
  if (p > low) break;
}

console.log(low);
