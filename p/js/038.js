/* jshint node: true */

"use strict";

var pm = require('./pm');

for (var result = 0, n = 1; n < 9999; n++) {
  var a = pm.n2a_decimal(n);
  for (var i = 2; a.length <= 9; i++) {
    a = a.concat(pm.n2a_decimal(n * i));
    if (a.length === 9 && pm.pandigital(a)) {
      result = pm.a2n(a);
    }
  }
}

console.log(result);
