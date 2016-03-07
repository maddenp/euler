/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var limit = 100;
var ns = {};

for (var a = 2; a <= limit; a++) {
  var a_arr = pm.n2a(a);
  for (var b = 2; b <= limit; b++) {
    a_arr = pm.array_mult(a_arr, a);
    ns[pm.a2s(a_arr)] = true;
  }
}

console.log(Object.keys(ns).length);
