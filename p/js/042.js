/* jshint node: true */

"use strict";

var pm = require('./pm');

function sqe(c) {
  // simplified quadratic equation with a=1, b=1
  var x0 = (-1 + Math.sqrt(1 + 4 * c)) / 2;
  var x1 = (-1 - Math.sqrt(1 + 4 * c)) / 2;
  return [x0, x1];
}

function is_triangle_number(n) {
  var test = function(n) { return pm.is_integral(n) && n > 0; };
  return sqe(n * 2).filter(test).length > 0;
}

var words = pm.readfile('042.dat').split(',');

console.log(words.map(pm.word_sum).filter(is_triangle_number).length);
