/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var n = 1e12;

while (true) {
  var a = (n & 1) === 0 ? n / 2 : n;
  var b = (n & 1) === 0 ? n - 1 : (n - 1) / 2;
  var c = a * b;
  console.log(n, a, b, c);
  var roots = pm.quadratic_roots(1, -1, -c);
  var soln = roots.filter(r => r > 0 && Number.isInteger(r));
  if (soln.length > 0) {
    console.log(soln[0]);
    break;
  }
  n++;
}
