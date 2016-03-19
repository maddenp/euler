/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var highest_cached_prime = 3;
var n = 1;
var on_diagonal = 1;
var on_diagonal_prime = 0;
var primes = [2, 3];
var side = 3;

const is_prime = n => {
  if (n === 2) return true;
  if ((n & 1) === 0) return false;
  for (var m = highest_cached_prime + 2; m <= Math.sqrt(n); m += 2) {
    if (is_prime(m)) primes.push(m);
  }
  highest_cached_prime = m - 2;
  for (var i = 0; i < primes.length && primes[i] <= Math.sqrt(n); i++) {
    if (n % primes[i] === 0) return false;
  }
  return true;
};

do {
  for (var i = 0; i < 4; i++) {
    n += (side - 1);
    ++on_diagonal;
    if (is_prime(n)) ++on_diagonal_prime;
  }
  side += 2;
} while (on_diagonal_prime / on_diagonal >= 0.1);

console.log(side - 2);
