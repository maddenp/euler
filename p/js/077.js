/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const primes = pm.primes(1, 61); // experimentally derived range

for (var n = 1; pm.partitions.p1(n, primes, primes.length - 1) <= 5000; n++);

console.log(n);
