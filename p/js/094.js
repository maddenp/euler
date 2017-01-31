/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

const n = 3;

const fs = pm.pell_fundamental_solution(n);

// Array.isArray()

const fam = (x) => (2 * x - 1) / 3;
const fap = (x) => (2 * x + 1) / 3;

const x1 = pm.a2n(fs[0]);
const y1 = pm.a2n(fs[1]);

var xk = x1;
var yk = y1;

var sum = 0;

// while (xk + xk + yk <= 1e9) {
while (true) {
  var x_new = x1 * xk + n * y1 * yk;
  var y_new = x1 * yk +     y1 * xk;
  xk = x_new;
  yk = y_new;
  if (xk + xk + yk > 1e9) break;
  var am = fam(xk);
  if (Number.isInteger(am)) {
    var bm = am - 1;
    sum += am + am + bm;
//     console.log(am,am,bm);
  }
  var ap = fap(xk);
  if (Number.isInteger(ap)) {
    var bp = ap + 1;
    sum += ap + ap + bp;
//     console.log(ap,ap,bp);
  }
}

console.log(sum);
// 5 5 6
// 17 17 16
// 65 65 66
// 241 241 240
// 901 901 902
// 3361 3361 3360
// 12545 12545 12546
// 46817 46817 46816
// 174725 174725 174726
// 652081 652081 652080
// 2433601 2433601 2433602
// 9082321 9082321 9082320
// 33895685 33895685 33895686
// 126500417 126500417 126500416
//
// 518408346
