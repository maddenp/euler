/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 10000000;
const primes = pm.primes(2, limit);

var the_n;
var min_ratio = Number.MAX_SAFE_INTEGER;

for (var i = 0; i < primes.length; i++) {
  for (var j = i + 1; j < primes.length; j++) {
    var p1 = primes[i];
    var p2 = primes[j];
    var n = p1 * p2;
    if (n > limit) break;
    var totient = (p1 - 1) * (p2 -1);
    var ratio = n / totient;
    if (ratio < min_ratio && pm.are_permutations(n, totient)) {
      min_ratio = ratio;
      the_n = n;
    }
  }
}

console.log(the_n);
