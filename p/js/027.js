/* jshint node: true */

"use strict";

var pm = require('./pm');

function is_non_prime(n) {
  if (n < 2) return true;
  return !pm.is_prime(n);
}

var max = 0;
var product = 0;

for (var a = 0; a < 1000; a++) {
  for (var b = -999; b < 1000; b++) {
    var active_n = true;
    var active_p = true;
    var count_n = 0;
    var count_p = 0;
    var n = 0;
    while (active_n || active_p) {
      if (active_n) {
        if (is_non_prime(n * (n - a) + b)) {
          active_n = false;
        } else {
          ++count_n;
        }
      }
      if (active_p) {
        if (is_non_prime(n * (n + a) + b)) {
          active_p = false;
        } else {
          ++count_p;
        }
      }
      ++n;
    }
    if (count_n > max) {
      max = count_n;
      product = -a * b;
    }
    if (count_p > max) {
      max = count_p;
      product = +a * b;
    }
  }
}

console.log(product);
