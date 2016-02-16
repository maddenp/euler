/* jshint node: true */

"use strict";

var pm = require('./pm');

var goal = 8;
var primes_and_is_prime = pm.primes(1, 1000000, true);
var primes = primes_and_is_prime[0];
var is_prime = primes_and_is_prime[1];

prime_loop: for (var primenum = 0; primenum < primes.length; primenum++) {
  var prime = pm.n2a(primes[primenum]);
  var mask = [];
  for (var zeroes = 0; zeroes < prime.length; zeroes++) {
    mask.push(0);
  }
  mask_loop: for (var masknum = 1; masknum < Math.pow(2, prime.length) - 1; masknum++) {

    pm.array_inc(mask, 2);

    // If the mask is allowed to tweak the digit in the prime's low-order (10^0)
    // position, then the generated "primes" will be in the set ...0, ...1, ...2
    // through ...9. But six of these (...0, ...2, ...4, ...5, ...6, and ...8)
    // are certainly composite, leaving only four candidates (...1, ...3, ...7
    // and ...9), so that an eight-prime family cannot be obtained. So, the mask
    // cannot tweak the low-order posiiton.

    if (mask[mask.length - 1] === 1) continue mask_loop;

    var composites = 0;
    var tweaked = prime.slice();
    var generated_primes = [];
    digit_loop: for (var digit = 0; digit < 10; digit++) {
      for (var position = 0; position < prime.length; position++) {
        if (mask[position]) {
          if (position === 0 && digit === 0) {
            continue digit_loop;
          }
          tweaked[position] = digit;
        }
      }
      var candidate = pm.a2n(tweaked);
      if (is_prime[candidate]) {
        generated_primes.push(candidate);
        if (generated_primes.length === goal) {
          console.log(pm.array_min(generated_primes));
          break prime_loop;
        }
      } else {
        ++composites;
        // Too many composites => not enough primes.
        if (composites > (10 - goal)) {
          continue mask_loop;
        }
      }
    }
  }
}
