/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

function number_is_prime(n) {
  return primes_map[n];
}

function rotations(n) {
  var a = pm.n2a(n), d = pm.ndigits(n), r = [];
  for (var i = 0; i < d; i++) {
    var m = 0;
    for (var j = 0; j < d; j++) {
      m = m * 10 + a[(i + j) % d];
    }
    r.push(m);
  }
  return r;
}

var limit = 1000000;
var nsolutions = 0;
var primes_and_primes_map = pm.primes(1, limit, true);
var primes = primes_and_primes_map[0];
var primes_map = primes_and_primes_map[1];

for (var i = 0; i < primes.length; i++) {
  if (primes_map[primes[i]]) {
    var r = rotations(primes[i]);
    if (r.every(number_is_prime)) {
      ++nsolutions;
    } else {
      for (var j = 0; j < r.length; j++) {
        primes_map[r[j]] = false;
      }
    }
  }
}

console.log(nsolutions);
