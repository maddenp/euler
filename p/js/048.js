/* jshint node: true */

"use strict";

var pm = require('./pm');

for (var n = 1, sum = [0], even = false; n <= 1000; n++) {
  var product = even ? [1] : [n];
  var limit = even ? n / 2 : (n - 1) / 2;
  for (var i = 0; i < limit; i++) {
    product = pm.array_trunc(pm.array_mult(product, n * n), 10);
  }
  sum = pm.array_add(sum, product);
  even = !even;
}

console.log(pm.a2n(pm.array_trunc(sum, 10)));
