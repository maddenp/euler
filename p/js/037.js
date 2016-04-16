/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const prime = pm.prime;

function truncatable_both_ways(n) {
  var m = n;
  while (n > 0) {
    if (!prime.check(n) || !prime.check(m)) return false;
    n = Math.floor(n / 10);
    m = m % Math.pow(10, Math.floor(Math.log10(m)));
  }
  return true;
}

var truncatable_primes = [];

var i = prime.index_of(11);

while (i++) {
  var n = prime.at(i);
  if (truncatable_both_ways(n)) {
    truncatable_primes.push(n);
    if (truncatable_primes.length === 11) break;
  }
}

console.log(pm.array_sum(truncatable_primes));
