/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

function hexagon_number(n) {
  return (n * (2 * n - 1));
}

var n = 144;

while (true) {
  var h = hexagon_number(n);
  if (pm.is_figurate_5(h) && pm.is_figurate_3(h)) {
    console.log(h);
    break;
  }
  ++n;
}
