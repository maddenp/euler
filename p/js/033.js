/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

function Ratio(num, den) {
  this.num = num;
  this.den = den;
}

function digit_cancelling_fraction(ratio) {
  var n1 = ratio.num % 10, n2 = Math.floor(ratio.num / 10);
  var d1 = ratio.den % 10, d2 = Math.floor(ratio.den / 10);
  if (n1 === d1) return equal_ratios(ratio, new Ratio(n2, d2));
  if (n1 === d2) return equal_ratios(ratio, new Ratio(n2, d1));
  if (n2 === d1) return equal_ratios(ratio, new Ratio(n1, d2));
  if (n2 === d2) return equal_ratios(ratio, new Ratio(n1, d1));
  return false;
}

function equal_ratios(ratio1, ratio2) {
  var lf1 = lowest_form(ratio1);
  var lf2 = lowest_form(ratio2);
  if (lf1.num === lf2.num && lf1.den === lf2.den) return true;
  return false;
}

function lowest_form(ratio) {
  var r = new Ratio(ratio.num, ratio.den);
  for (var n = Math.min(r.num, r.den); n > 1; n--) {
    if (r.num % n === 0 && r.den % n === 0) { r.num /= n; r.den /= n; }
   }
  return r;
}

var results = [];

for (var num = 10; num < 100; num++) {
  for (var den = num + 1; den < 100; den ++) {
    if (num % 10 === 0 && den % 10 === 0) continue; // trivial example
    var ratio = new Ratio(num, den);
    if (digit_cancelling_fraction(ratio)) results.push(ratio);
  }
}

var prod_num = pm.array_product(results.map(function (r) { return r.num; }));
var prod_den = pm.array_product(results.map(function (r) { return r.den; }));
var prod_ratio = new Ratio(prod_num, prod_den);
var prod_ratio_lowest_form = lowest_form(prod_ratio);
console.log(prod_ratio_lowest_form.den);
