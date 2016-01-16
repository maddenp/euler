/* jshint node: true */

"use strict";

var pm = require('./pm');

function low_order_pow(a, exponent, digits) {
  var base = [1];
  var n = pm.a2n(a);
  for (var i = 0; i < exponent; i++) {
    base = pm.array_trunc(pm.array_mult(base, n), 10);
  }
  return base;
}

for (var i = 1, sum = [0]; i <= 1000; i++) {
  sum = pm.array_trunc(pm.array_add(sum, low_order_pow(pm.n2a(i), i, 10)), 10);
}

console.log(pm.a2n(sum));
