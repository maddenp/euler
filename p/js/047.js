/* jshint node: true */

"use strict";

var pm = require('./pm');

function prime_factorization(n, primes_less_than_n) {
  var factors = [];
  for (var i = 0; i < primes_less_than_n.length; i++) {
    var p = primes_less_than_n[i];
    while (n % p === 0) {
      factors.push(p);
      n /= p;
    }
    if (n === 1) break;
  }
  if (factors.length === 0) {
    primes_less_than_n.push(n);
    factors.push(n);
  }
  return factors;
}

var chain = [], count = 4, primes = [];

for (var n = 2; chain.length < count; n++) {
  var unique_pfs = pm.uniques(prime_factorization(n, primes));
  if (unique_pfs.length === count) {
    chain.push(n);
    continue;
  }
  chain = [];
}

console.log(chain[0]);
