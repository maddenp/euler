/* jshint node: true */

"use strict";

function prime_factors(n, primes, factors) {
  var count = 1, factor = false;
  for (var i = Math.floor(Math.sqrt(n)); i >= 0; i--) {
    if (primes[i] && n % i === 0) {
      factor = i;
      break;
    }
  }
  if (factor) {
    var m = n;
    while (m % factor === 0) m /= factor;
    count += m === 1 ? 0 : factors[m];
  } else {
    primes[n] = true;
  }
  factors[n] = count;
  return count;
};

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
