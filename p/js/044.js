/* jshint node: true */

"use strict";

var pm = require('./pm');

function is_pentagon_number(n) {
  var test = function(n) { return pm.is_integral(n) && n > 0; };
  return pm.quadratic_roots(3, -1, -n * 2).filter(test).length > 0;
}

function pentagon_number(n) {
  return (n * (3 * n - 1)) / 2;
}

var n = 1, pn = [];

out: while (true) {
  pn.push(pentagon_number(n));
  var len = pn.length;
  var last = len - 1;
  for (var i = 0; i < last; i++) {
    var diff = pn[last] - pn[i];
    var sum  = pn[last] + pn[i];
    if (is_pentagon_number(diff) && is_pentagon_number(sum)) {
      console.log(pn[last] - pn[i]);
      break out;
    }
  }
  ++n;
}
