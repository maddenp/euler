/* jshint node: true */

"use strict";

var pm = require('./pm');

function low_order_pow(a, exponent, digits) {
  var base = [1];
  for (var i = 0; i < exponent; i++) {
    base = pm.array_trunc(pm.array_mult(base, exponent), 10);
  }
  return base;
}

var a =[1];
for (var n = 1, sum = [0]; n <= 1000; n++) {
  sum = pm.array_add(sum, low_order_pow(a, n, 10));
  pm.array_inc(a);
}

console.log(pm.a2n(pm.array_trunc(sum, 10)));
