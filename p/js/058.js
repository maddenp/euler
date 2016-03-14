/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var inc = 2;
var on_diagonal = 1;
var on_diagonal_prime = 0;
var side = 3;
var x = 1;

while (true) {
  for (var i = 0; i < 4; i++) {
    x += inc;
    ++on_diagonal;
    if (pm.is_prime(x)) ++on_diagonal_prime;
  }
  if (on_diagonal_prime / on_diagonal < .1) {
    console.log(side);
    break;
  }
  inc += 2;
  side += 2;
}
