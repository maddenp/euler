/* jshint node: true */

"use strict";

var pm = require('./pm');

function hexagon_number(n) {
  return (n * (2 * n - 1));
}

var n = 144;

while (true) {
  var h = hexagon_number(n);
  if (pm.is_pentagon_number(h) && pm.is_triangle_number(h)) {
    console.log(h);
    break;
  }
  ++n;
}
