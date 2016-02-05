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
  var y = 1;
  for (var i = Math.floor(Math.sqrt(n)); i >= 0; i--) {
    if (primes[i] && n % i === 0) {
      y = i;
      break;
    }
  }
  var f = [];
  if (y > 1) {
    f = ordered_insert(factors[n / y], y);
  }
  factors[n] = f;
  if (f.length === 0) {
    primes[n] = true;
    factors[n] = [n];
  }
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
