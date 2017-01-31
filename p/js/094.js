/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

// Skip fundamental sol'n (not a triangle).

const limit = 1e9;
const n = 3;
const fs = pm.pell_fundamental_solution(n);
const x1 = pm.a2n(fs[0]);
const y1 = pm.a2n(fs[1]);

var sum = 0;
var xk = x1;
var yk = y1;

while (true) {
  var x_new = x1 * xk + n * y1 * yk;
  var y_new = x1 * yk +     y1 * xk;
  xk = x_new;
  yk = y_new;
  if (xk + xk + yk > limit) break;
  [+1, -1].forEach(i => {
    var a = (2 * xk + i) / 3;
    if (Number.isInteger(a)) sum += 3 * a + i;
  });
}

console.log(sum);
