/* jshint node: true */

"use strict";

var pm = require('./pm');

var primes_and_is_prime = pm.primes(1, 1000000, true);
var primes = primes_and_is_prime[0];
var is_prime = primes_and_is_prime[1];

prime_loop: for (var primenum = 0; primenum < primes.length; primenum++) {
  var prime = pm.n2a(primes[primenum]);
  var mask = [0];
  mask_loop: for (var masknum = 1; masknum < Math.pow(2, prime.length) - 1; masknum++) {
    pm.array_inc(mask, 2);
    if (mask[mask.length - 1] === 1) continue mask_loop; // See note 1
    var ones = 0;
    for (var i = 0; i < mask.length; i++) ones += mask[i];
    if ((ones % 3) !== 0) continue mask_loop; // See note 2
    var composites = 0;
    var tweaked = prime.slice();
    var count = 0;
    var smallest = undefined;
    digit_loop: for (var digit = 0; digit < 10; digit++) {
      for (var position = 0; position < prime.length; position++) {
        if (position === 0 && digit === 0)  continue digit_loop;
        if (mask[position]) tweaked[position] = digit;
      }
      var candidate = pm.a2n(tweaked);
      if (candidate % 3 === 0) continue mask_loop; // See note 3
      if (is_prime[candidate]) {
        if (!smallest || candidate < smallest) smallest = candidate;
        ++count;
        if (count === 8) {
          console.log(smallest);
          break prime_loop;
        }
      } else {
        if (++composites > 2) continue mask_loop; // See note 4
      }
    }
  }
}

/* Notes
 *
 * 1. If the mask is allowed to tweak the digit in the prime's low-order (10^0)
 * position, then the generated "primes" will be in the set ...0, ...1, ...2
 * through ...9. But six of these (...0, ...2, ...4, ...5, ...6, and ...8) are
 * certainly composite, leaving only four candidates (...1, ...3, ...7 and ...9)
 * so that an eight-prime family cannot be obtained. So, the mask cannot tweak
 * the low-order posiiton.
 *
 * 2. A tweaked number will not be prime if it is divible by 3, and a number
 * is divisible by 3 if the sum of its digits is divisible by 3. If the mask
 * contains 3 (or 6, or 9) 1s, then the same digit will be placed in 3 masked
 * positions. Call that digit x: Then, the contribution of the replacement
 * digit to the sum of the number's digits will be x + x + x = 3x, which is
 * congruent to 0 (mod 3), so that, essentially, the x's will contribute
 * nothing to the mod 3 congruence of the whole number and said congruence
 * will depend wholly on the other, non-masked digits: Either the entire
 * family of mask-tweaked numbers will be congruent to 0 (mod 3), or none
 * of them will. That is, it's worth checking to see if there are 8 primes
 * in the family. On the other hand, consider the case when there are 2
 * 1s in the mask: Then, the contribution of the replacement digits to the
 * sum of the numbers will be x + x = 2x, which has the (mod 3) congruence
 * pattern 0, 2, 1, 0, 2, 1, 0, 2, 1, 0 for x ranging from 0 to 9. The sum
 * of the non-masked digits must be congruent to {0, 1, 2} (mod 3). Whatever
 * the case, as x ranges from 0 to 9, the sum of all the digits will be
 * congruent to 0 (mod 3) either 3 or 4 times, meaning that either 3 or 4
 * numbers in the family will be divisible by 3, and so not prime, leaving
 * open only the possibility that 7 or 6 numbers in the family may be prime,
 * which is insufficient for the 8-prime family requirement. So, the mask
 * must have a number of 1s that is a multiple of 3.
 *
 * 3. If the candidate is divisble by 3, then the entire family will be, since
 * the mask has an even number of 1s (see note 2).
 *
 * 4. If too many composites have been seen, there's no possibility that enough
 * of the remaining generated numbers will be prime to complete the n-prime
 * family.
 *
 */
