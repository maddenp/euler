/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 1000000;
const primes = pm.primes(2, limit);
const totient = [];

for (var n = 1; n <= limit; n++) totient[n] = n;

for (var i = 0; i < primes.length; i++) {
  var p = primes[i];
  for (var j = p; j <= limit; j += p) {
    totient[j] *= (1 - (1/p));
  }
}

var farey_length = 1;

for (var i = 1; i <= limit; i++) farey_length += totient[i];

const soln = farey_length - 2;

console.log(soln);
