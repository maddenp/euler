/* jshint node: true */

"use strict";

var pm = require('./pm');

for (var n = 1, sum = [0]; n <= 1000; n++) {
  var product = [1];
  for (var i = 0; i < n; i++) {
    product = pm.array_trunc(pm.array_mult(product, n), 10);
  }
  sum = pm.array_add(sum, product);
}

console.log(pm.a2n(pm.array_trunc(sum, 10)));
