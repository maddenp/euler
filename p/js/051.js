/* jshint node: true */

"use strict";

var pm = require('./pm');

var goal = 8;
var limit = 1000000;
var primes_and_is_prime = pm.primes(1, limit, true);
var primes = primes_and_is_prime[0];
var is_prime = primes_and_is_prime[1];

out: for (var primes_idx = 0; primes_idx < primes.length; primes_idx++) {
  var prime = pm.n2a(primes[primes_idx]);
  var mask = [];
  for (var zeroes = 0; zeroes < prime.length; zeroes++) {
    mask.push(0);
  }
  for (var masknum = 1; masknum < Math.pow(2, prime.length) - 1; masknum++) {
    pm.array_inc(mask, 2);
    var tweaked = prime.slice();
    var generated_primes = [];
    for (var replacement = 0; replacement < 10; replacement++) {
      for (var position = 0; position < prime.length; position++) {
        if (mask[position]) {
          tweaked[position] = replacement;
        }
      }
      if (tweaked[0] === 0) continue;
      var candidate = pm.a2n(tweaked);
      if (is_prime[candidate]) {
        generated_primes.push(candidate);
        if (generated_primes.length === goal) {
          console.log(pm.array_min(generated_primes));
          break out;
        }
      }
    }
  }
}
