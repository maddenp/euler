/* jshint node: true */

"use strict";

var pm = require('./pm');

var goal = 8;
var limit = 1000000;
var primes_and_is_prime = pm.primes(1, limit, true);
var primes = primes_and_is_prime[0];
var is_prime = primes_and_is_prime[1];

prime_loop: for (var primenum = 0; primenum < primes.length; primenum++) {
  var prime = pm.n2a(primes[primenum]);
  var mask = [];
  for (var zeroes = 0; zeroes < prime.length; zeroes++) {
    mask.push(0);
  }
  for (var masknum = 1; masknum < Math.pow(2, prime.length) - 1; masknum++) {
    pm.array_inc(mask, 2);
    var tweaked = prime.slice();
    var generated_primes = [];
    digit_loop: for (var digit = 0; digit < 10; digit++) {
      for (var position = 0; position < prime.length; position++) {
        if (mask[position]) {
          tweaked[position] = digit;
        }
      }
      if (tweaked[0] === 0) {
        continue;
      }
      var candidate = pm.a2n(tweaked);
      if (is_prime[candidate]) {
        generated_primes.push(candidate);
        if (generated_primes.length === goal) {
          console.log(pm.array_min(generated_primes));
          break prime_loop;
        }
      }
    }
  }
}
