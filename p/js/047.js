/* jshint node: true */

"use strict";

var pm = require('./pm');

var chain = [], count = 4, primes = [];

for (var n = 2; chain.length < count; n++) {
  var unique_pfs = pm.uniques(pm.prime_factorization(n, primes));
  if (unique_pfs.length === count) {
    chain.push(n);
    continue;
  }
  chain = [];
}

console.log(chain[0]);
