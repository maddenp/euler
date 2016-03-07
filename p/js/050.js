/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var limit = 1000000;
var max_chain_len = 0;
var max_prime = 0;
var primes_and_is_prime = pm.primes(1, limit, true);
var primes = primes_and_is_prime[0];
var is_prime = primes_and_is_prime[1];

outer: for (var i = 0; i < primes.length - 2; i++) {
  var sum = primes[i];
  for (var j = i + 1; j < primes.length - 1; j++) {
    sum += primes[j];
    if (sum > limit) continue outer;
    if (is_prime[sum]) {
      var chain_len = j - i;
      if (chain_len > max_chain_len) {
        max_chain_len = chain_len;
        max_prime = sum;
      }
    }
  }
}

console.log(max_prime);
