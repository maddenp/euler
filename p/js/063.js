/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var count = 0;

for (var n = 1; true; n++) {
  var oldcount = count;
  for (var b = 1; true; b++) {
    if (b === 10) continue;
    var d = pm.ndigits(Math.pow(b, n));
    if (d > n) break;
    if (d === n) ++count;
  }
  if (count === oldcount) break;
}

console.log(count);
