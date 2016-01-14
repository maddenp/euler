/* jshint node: true */

"use strict";

var pm = require('./pm');

var limit = 100;
var ns = [];

for (var a = 2; a <= limit; a++) {
  var a_arr = pm.n2a(a);
  for (var b = 2; b <= limit; b++) {
    ns.push(pm.a2n(pm.array_pow(a_arr, b)));
  }
}

var uniques = pm.uniques(ns, true);

console.log(uniques.length);
