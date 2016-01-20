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
    var active_an = true;
    var active_ap = true;
    var count_an = 0;
    var count_ap = 0;
    var n = 0;
    while (active_an || active_ap) {
      var m = n * n;
      var o = a * n;
      if (active_an) {
        if (is_non_prime(m - o + b)) {
          active_an = false;
        } else {
          ++count_an;
        }
      }
      if (active_ap) {
        if (is_non_prime(m + o + b)) {
          active_ap = false;
        } else {
          ++count_ap;
        }
      }
      ++n;
    }
    if (count_an > max) {
      max = count_an;
      product = -a * b;
    }
    if (count_ap > max) {
      max = count_ap;
      product = +a * b;
    }
  }
}

console.log(product);
