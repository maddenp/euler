/* jshint node: true */

"use strict";

var pm = require('./pm.js');

function rotations(n) {
  var a = pm.n2a_decimal(n), d = pm.ndigits(n), r = [];
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
var primes = pm.primes_up_to(limit);
var nsolutions = 0;

function number_is_prime(n) {
  return pm.bisearch(primes, n) !== undefined;
}

for (var i = 2; i < limit; i++) {
  if (rotations(i).every(number_is_prime)) ++nsolutions;
}

console.log(nsolutions);
