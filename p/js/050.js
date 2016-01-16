/* jshint node: true */

"use strict";

var pm = require('./pm');

var limit = 1000000;
var max_chain_len = 0;
var max_prime = 0;
var sums = [];

var primes_and_is_prime = pm.primes(1, limit, true);
var primes = primes_and_is_prime[0];
var is_prime = primes_and_is_prime[1];

function downshift(i, j, sums) {
  if (i > 0) {
    for (var k = j - 1; k >= i; k--) {
      sums[k] -= sums[i - 1];
    }
  }
}

for (var i = 0, sum = 0; i < primes.length; i++) {
  sum += primes[i];
  sums[i] = sum;
}

outer: for (var i = 0; i < sums.length - 1; i++) {
  for (var j = sums.length - 1; j >= i; j--) {
    var chain_len = j - i;
    if (i > 0) sums[j] -= sums[i - 1];
    if (chain_len <= max_chain_len) {
      downshift(i, j, sums);
      continue outer;
    }
    if (sums[j] <= limit && is_prime[sums[j]]) {
      if (chain_len > max_chain_len) {
        max_chain_len = chain_len;
        max_prime = sums[j];
      }
      downshift(i, j, sums);
      continue outer;
    }
  }
}

console.log(max_prime);
