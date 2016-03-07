/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

function prime_factors(n, primes, factors) {
  var count = 1, factor = false, i = Math.floor(Math.sqrt(n));
  if (i % 2 === 0) --i;
  while (i > 2) {
    if (primes[i] && n % i === 0) {
      factor = i;
      break;
    }
    i -= 2;
  }
  if (!factor && n !== 2 && n % 2 === 0) factor = 2;
  if (factor) {
    var m = n;
    while (m % factor === 0) m /= factor;
    count += m === 1 ? 0 : factors[m];
  } else {
    primes[n] = true;
  }
  factors[n] = count;
  return count;
}

var chain_len = 0, factors = {}, goal = 4, primes = [];

for (var n = 2; chain_len < goal; n++) {
  var count = prime_factors(n, primes, factors);
  if (count === goal) {
    ++chain_len;
  } else {
    chain_len = 0;
  }
}

console.log(n - 4);
