/* jshint node: true */

"use strict";

var pm = require('./pm');

function is_triangle_number(n) {
  var test = function(n) { return pm.is_integral(n) && n > 0; };
  return pm.quadratic_roots(1, 1, -n * 2).filter(test).length > 0;
}

var words = pm.readfile('042.dat').split(',');

console.log(words.map(pm.word_sum).filter(is_triangle_number).length);
