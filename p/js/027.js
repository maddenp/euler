/* jshint node: true */

"use strict";

function is_composite(n) {
  if (n < 2) return true;
  for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return true;
  }
  return false;
}

var max = 0;
var product = 0;

for (var a = -999; a < 1000; a++) {
  for (var b = -999; b < 1000; b++) {
    for (var n = 0, count = 0;; n++, count++) {
      if (is_composite(n * n + a * n + b)) break;
    }
    if (count > max) {
      max = count;
      product = a * b;
    }
  }
}

console.log(product);
