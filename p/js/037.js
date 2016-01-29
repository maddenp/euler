/* jshint node: true */

"use strict";

var pm = require('./pm');

function truncatable_both_ways(n, primes_map) {
  var m = n;
  while (n > 0) {
    if (!primes_map[n] || !primes_map[m]) return false;
    n = Math.floor(n / 10);
    m = m % Math.pow(10, Math.floor(Math.log10(m)));
  }
  return true;
}

var limit = 1000000;
var primes_and_primes_map = pm.primes(11, limit, true);
var primes = primes_and_primes_map[0];
var primes_map = primes_and_primes_map[1];
var truncatable_primes = [];

for (var i = 0; i < primes.length; i++) {
  var n = primes[i];
  if (truncatable_both_ways(n, primes_map)) {
    truncatable_primes.push(n);
    if (truncatable_primes.length === 11) break;
  }
}

console.log(pm.array_sum(truncatable_primes));
