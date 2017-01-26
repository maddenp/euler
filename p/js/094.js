/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

var sum = 0;;

const exclude = (T) => T[0] + T[1] + T[2] > 1000000000;

const accept = (T) => {
  T.sort((a, b) => a - b);
  var a = T[2];
  var b = T[0] * 2;
  if (Math.abs(a - b) === 1) sum += 2 * a + b;
}

pm.pythagorean_triples(exclude, accept);

console.log(sum);
