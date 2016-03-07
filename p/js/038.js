/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

for (var result = 0, n = 1; n < 9999; n++) {
  var a = pm.n2a(n);
  for (var i = 2; a.length <= 9; i++) {
    a = a.concat(pm.n2a(n * i));
    if (a.length === 9 && pm.is_pandigital(a)) {
      result = pm.a2n(a);
    }
  }
}

console.log(result);
