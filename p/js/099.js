/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const pairs = require('fs').readFileSync('099.dat', 'utf8').split('\n').reduce((m, e) => {
  var p = e.split(',').map(x => parseInt(x));
  m.push({base: p[0], exp: p[1]});
  return m;
}, []);

var line;
var max = 0;

// Compute the natural logarithm corresponding to each base-exponent pair with
// base converted to e. Once in a common base, the (unknown) exponentials can be
// compared using their exponents as proxies.

for (var i = 0; i < pairs.length; i++) {
  var base_e_exp = pairs[i].exp * Math.log(pairs[i].base);
  if (base_e_exp > max) {
    line = i + 1;
    max = base_e_exp;
  }
}

console.log(line);
