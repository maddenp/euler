/* jshint node: true */

"use strict";

var pm = require('./pm');

for (var n = 1, sum = 0; n < 10000; n++) {
  var s = pm.sum_of_proper_divisors(n);
  var m = pm.sum_of_proper_divisors(s);
  if (m === n && s !== n) {
    sum += n;
  }
}

console.log(sum);
