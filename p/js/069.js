/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 1000000;
const primes = pm.primes(2, limit);
const totient = [];

for (var i = 2; i <= limit; i++) {
  totient[i] = i;
}

for (var i = 0; i < primes.length; i++) {
  var p = primes[i];
  for (var j = p; j <= limit; j += p) {
    if (j > limit) break;
    totient[j] *= (1 - (1/p));
  }
}

var max_i;
var max_ratio = 0;

for (var i = 2; i <= limit; i++) {
  var ratio = i / totient[i];
  if (ratio > max_ratio) {
    max_ratio = ratio;
    max_i = i;
  }
}

console.log(max_i);
