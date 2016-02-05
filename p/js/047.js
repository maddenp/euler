/* jshint node: true */

"use strict";

var pm = require('./pm');

function ordered_insert(a, n) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    if (n && a[i] >= n) {
      if (a[i] > n) b.push(n);
      n = false;
    }
    b.push(a[i]);
  }
  if (n) b.push(n);
  return b;
}

function prime_factors(n, primes, factors) {
  var lpf = false;
  for (var i = Math.floor(Math.sqrt(n)); !lpf && i >= 0; i--) {
    if (primes[i] && n % i === 0) {
      lpf = i;
    }
  }
  var f = lpf ? ordered_insert(factors[n / lpf], lpf) : [n];
  if (!lpf) primes[n] = true;
  factors[n] = f;
  return factors[n];
};

var chain_len = 0, factors = {}, goal = 4, primes = [];

for (var n = 2; chain_len < goal; n++) {
  var count = prime_factors(n, primes, factors).length;
  if (count === goal) {
    ++chain_len;
  } else {
    chain_len = 0;
  }
}

console.log(n - 4);
