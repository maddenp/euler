/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 50000000;

const ok = new Set([]);

const squares = pm.primes(2, Math.sqrt(limit)).map(n => n * n);
const cubes = pm.primes(2, Math.cbrt(limit)).map(n => n * n *n);
const quarts = pm.primes(2, Math.sqrt(Math.sqrt(limit))).map(n => n * n * n *n);

for (var i = 0; i < quarts.length; i++) {
  for (var j = 0; j < cubes.length; j++) {
    var partial = quarts[i] + cubes[j];
    if (partial > limit) continue;
    for (var k = 0; k < squares.length; k++) {
      var sum = partial + squares[k];
      if (sum < limit) ok.add(sum);
    }
  }
}

console.log(ok.size);
