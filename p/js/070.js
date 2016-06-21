/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 10000000;
const primes = pm.primes(2, limit);
const totient = [];

for (var n = 2; n < limit; n++) {
  totient[n] = n;
}

for (var i = 0; i < primes.length; i++) {
  var p = primes[i];
  for (var j = p; j <= limit; j += p) {
    if (j > limit) break;
    totient[j] *= (1 - (1/p));
  }
}

var the_n;
var min_ratio = Number.MAX_SAFE_INTEGER;

for (var n = 2; n < limit; n++) {
  if (pm.are_permutations(n, totient[n])) {
    var ratio = n / totient[n];
    if (ratio < min_ratio) {
      min_ratio = ratio;
      the_n = n;
    }
  }
}

console.log(the_n);
