/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

var count = 0;

const exclude = (T) => T[0] + T[1] + T[2] >= 100;

const accept = (T) => {
  T.sort((a, b) => a - b);
  var a = T[2];
  var b = T[0] * 2;
  if (Math.abs(a - b) === 1) {
    console.log(JSON.stringify(T));
    console.log(`final: ${JSON.stringify([a, a, b])}`);
  }
}

pm.pythagorean_triples(exclude, accept);

console.log(count);
