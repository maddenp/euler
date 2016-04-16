/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const prime = pm.prime;

var i = 1;

prime_loop: while (i++) {
  var mask = [0];
  var ndigits = pm.ndigits(prime.prime_at(i));
  mask_loop: for (var j = 1; j < Math.pow(2, ndigits) - 1; j++) {
    pm.array_inc(mask, 2);
    if (mask[mask.length - 1] === 1) continue mask_loop; // See note 1
    for (var ones = 0, k = 0; k < mask.length; k++) ones += mask[k];
    if ((ones % 3) !== 0) continue mask_loop; // See note 2
    var candidate = 0;
    var composites = 0;
    var exp = 0;
    var increment = pm.a2n(mask);
    var increment_count = 0;
    var q = prime.prime_at(i);
    var primes = 0;
    var smallest = undefined;
    while (q > 0) {
      candidate += Math.pow(10, exp) * (mask[mask.length - 1 - exp] === 1 ? 0 : q % 10);
      q = Math.floor(q / 10);
      ++exp;
    }
    do {
      if (pm.ndigits(candidate) === ndigits) {
        if (prime.check(candidate)) {
          if (!smallest || candidate < smallest) smallest = candidate;
          if (++primes === 8) {
            console.log(smallest);
            break prime_loop;
          }
        } else {
          if (++composites > 2) continue mask_loop; // See note 4
        }
      }
      candidate += increment;
      ++increment_count;
    } while (increment_count < 10);
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
