/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var solutions = [];
var limit = 1000;

for (var i = 0; i <= limit; i++) solutions[i] = 0;

for (var a = 1; a <= limit - 2; a++) {
  for (var b = a; b <= limit - a; b++) {
    var c = pm.hypotenuse(a, b);
    var perimeter = a + b + c;
    if (pm.is_integral(perimeter) && perimeter <= limit) {
      ++solutions[perimeter];
    }
  }
}   

for (var perimeter = 0, max = 0, i = 1; i <= limit; i++) {
  if (solutions[i] > max) {
    max = solutions[i];
    perimeter = i;
  }
}

console.log(perimeter);
