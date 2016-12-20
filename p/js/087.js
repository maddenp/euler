/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 50000000;

const ok = new Set([]);

const squares = pm.primes(2, Math.sqrt(limit)).map(n => n * n);
const cubes = pm.primes(2, Math.cbrt(limit)).map(n => n * n *n);
const quarts = pm.primes(2, Math.sqrt(Math.sqrt(limit))).map(n => n * n * n *n);

for (var i = 0; i < squares.length; i++) {
  for (var j = 0; j < cubes.length; j++) {
    for (var k = 0; k < quarts.length; k++) {
      var sum = squares[i] + cubes[j] + quarts[k];
      if (sum < limit) ok.add(sum);
    }
  }
}

console.log(ok.size);
