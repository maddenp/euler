/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

// [3, 7, 109, 673] => 792

const limit = 5;

const fail = (p1, p2) => {
  const n1 = p2 * Math.pow(10, pm.ndigits(p1)) + p1;
  const n2 = p1 * Math.pow(10, pm.ndigits(p2)) + p2;
  return pm.prime.check(n1) && pm.prime.check(n2) ? false : true;
};

const magic = 12596849;
var low = magic;

const primes = pm.primes(1, magic);

const f = (a, limit) => {
  pm.prime.reset();
  do { var p = pm.prime.next(); } while (p !== a[a.length - 1]);
  var sum = pm.array_sum(a);
  do {
    p = pm.prime.next();
    if (sum + p > low) return;
  } while (a.some(n => fail(p, n)));
  a.push(p);
  if (b.length === limit) {
    sum = pm.array_sum(a);
    if (sum < low) {
      console.log(a, sum);
      low = sum;
    }
  } else {
    f(a, limit);
  }
};

for (var x = 0; x < primes.length; x++) {
  var base = primes[x];
  var a = [primes[x]];
}
