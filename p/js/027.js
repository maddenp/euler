/* jshint node: true */

"use strict";

var pm = require('./pm');

function is_non_prime(n) {
  if (n < 2) return true;
  return !pm.is_prime(n);
}

var max = 0;
var product = 0;

for (var a = -999; a < 1000; a++) {
  for (var b = -999; b < 1000; b++) {
    var count = 0;
    var n = 0;
    while (true) {
      if (is_non_prime(n * (n + a) + b)) break;
      ++n;
      ++count;
    }
    if (count > max) {
      max = count;
      product = a * b;
    }
  }
}

console.log(product);
