/* jshint node: true */

"use strict";

var pm = require('./pm.js');

function truncatable(n, fn, prime) {
  var a = pm.n2a_decimal(n);
  while (a.length > 0) {
    if (! prime(pm.a2n(a))) return false;
    a[fn]();
  }
  return true
}

function truncatable_both_ways(n, prime) {
  return truncatable(n, 'shift', prime) && truncatable(n, 'pop', prime);
}

var filename = '037.dat';
var guess_limit = 1000000;
var tight_limit = pm.readfile(filename);
var limit = tight_limit || guess_limit;

var prime = function(limit) {
  var primes = pm.primes_up_to(limit);
  return function(n) {
    return primes[n];
  };
}(limit);

var truncatable_primes = [];

for (var n = 11; n < limit; n++) {
  if (truncatable_both_ways(n, prime)) {
    truncatable_primes.push(n);
    if (truncatable_primes.length === 11) break;
  }
}

if (! tight_limit) {
  pm.writefile(filename, n + 1);
}

console.log(pm.array_sum(truncatable_primes));
