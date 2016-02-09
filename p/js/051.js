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
  for (var mask_count = 0; mask_count < prime.length; mask_count++) {
    mask.push(0);
  }
  for (var mask_idx = 1; mask_idx < Math.pow(2, prime.length) - 1; mask_idx++) {
    var tweaked = prime.slice();
    pm.array_inc(mask, 2);
    var generated_primes = [];
    for (var replacement = 0; replacement < 10; replacement++) {
      for (var position = 0; position < prime.length; position++) {
        if (mask[position]) {
          tweaked[position] = replacement;
        }
      }
      if (tweaked[0] === 0) continue;
      var x = pm.a2n(tweaked);
      if (is_prime[x]) {
        generated_primes.push(x);
        if (generated_primes.length === goal) {
          console.log(pm.array_min(generated_primes));
          break out;
        }
      }
    }
  }
}
