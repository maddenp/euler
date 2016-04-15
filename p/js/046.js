/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const prime = pm.prime;

function conjecture_holds_for(n) {
  if (prime.check(n)) {
    primes.push(n);
    return true;
  }
  for (var i = 0; i < primes.length; i++) {
    if (pm.is_square((n - primes[i]) / 2)) return true;
  }
  return false;
}

var primes = [];
var n = 3;
while (conjecture_holds_for(n)) n += 2;
console.log(n);
