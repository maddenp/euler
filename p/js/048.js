/* jshint node: true */

"use strict";

var pm = require('./pm');

function low_order_pow(multiplier, digits) {
  var product = [1];
  for (var i = 0; i < multiplier; i++) {
    product = pm.array_trunc(pm.array_mult(product, multiplier), 10);
  }
  return product;
}

for (var n = 1, sum = [0]; n <= 1000; n++) {
  sum = pm.array_add(sum, low_order_pow(n, 10));
}

console.log(pm.a2n(pm.array_trunc(sum, 10)));
