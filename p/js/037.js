/* jshint node: true */

"use strict";

var pm = require('./pm');

function truncatable(n, fn, primes_map) {
  var a = pm.n2a(n);
  while (a.length > 0) {
    if (! primes_map[pm.a2n(a)]) return false;
    a[fn]();
  }
  return true;
}

function truncatable_both_ways(n, primes_map) {
  return truncatable(n, 'shift', primes_map) &&
    truncatable(n, 'pop', primes_map);
}

var filename = '037.dat';
var guess_limit = 1000000;
var tight_limit = pm.readfile(filename);
var limit = tight_limit || guess_limit;

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

if (! tight_limit) {
  pm.writefile(filename, n + 1);
}

console.log(pm.array_sum(truncatable_primes));
