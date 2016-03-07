/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var even = false;
var sum = [0];

for (var n = 1; n <= 1000; n++) {
  var product = even ? [1] : [n];
  var limit = even ? n / 2 : (n - 1) / 2;
  var multiplier = n * n;
  for (var i = 0; i < limit; i++) {
    product = pm.array_trunc(pm.array_mult(product, multiplier), 10);
  }
  sum = pm.array_add(sum, product);
  even = !even;
}

console.log(pm.a2n(pm.array_trunc(sum, 10)));
