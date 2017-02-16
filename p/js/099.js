/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pairs = require('fs').readFileSync('099.dat', 'utf8').split('\n').reduce((m, e) => (
  m.push(e.split(',').map(x => parseInt(x))), m
), []);

var line;
var max = 0;

// Compute the natural logarithm corresponding to each base-exponent pair with
// base converted to e. Once in a common base, the (unknown) exponentials can be
// compared using their exponents as proxies.

for (var i = 0; i < pairs.length; i++) {
  var x = Math.log(pairs[i][0]) * pairs[i][1];
  if (x > max) {
    line = i + 1;
    max = x;
  }
}

console.log(line);
