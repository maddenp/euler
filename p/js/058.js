/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var on_diagonal = 1;
var on_diagonal_prime = 0;
var side = 3;
var x = 1;

do {
  for (var i = 0; i < 4; i++) {
    x += (side - 1);
    ++on_diagonal;
    if (pm.is_prime(x)) ++on_diagonal_prime;
  }
  side += 2;
} while (on_diagonal_prime / on_diagonal >= 0.1);

console.log(side - 2);
