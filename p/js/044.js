/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

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
    if (pm.is_pentagon_number(diff) && pm.is_pentagon_number(sum)) {
      console.log(pn[last] - pn[i]);
      break out;
    }
  }
  ++n;
}
