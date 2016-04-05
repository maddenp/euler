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

const primes = pm.primes(1, magic);

var low = magic;

for (var x = 0; x < primes.length; x++) {

  pm.prime.reset();
  var a = [primes[x]];

  do { var p = pm.prime.next(); } while (p !== a[0]);

  out: for (var i = 0; i < limit - 1; i++) {
    var sum = pm.array_sum(a);
    do {
      p = pm.prime.next();
      if (sum + p > low) break out;
    } while (a.some(n => fail(p, n)));
    a.push(p);
  }

  if (a.length === limit) {
    console.log(a);
    var sum = pm.array_sum(a);
    console.log(sum);
    if (sum < low) low = sum;
  }

}
