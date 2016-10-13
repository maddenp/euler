/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

/*
 * A simplified, n e Z, 0 < n < 100 version of:
 *
 * https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Digit-by-digit_calculation
 *
 */

// for (var i = 1; i < 100; i++) {
//   var x = Math.sqrt(i);
//   if (Math.floor(x) === x) continue;
//   console.log(i);
// }

const sqrt = (n, decimal_places) => {
  
  var c = n;
  var p = 0;
  var r = 0;
  var s = [];

  const f = (p, x) => x * (20 * p + x);

  for (var i = 0; i <= decimal_places; i++) {
    for (var x = 0; f(p, x + 1) <= c; x++);
    var y = f(p, x);
    s.push(x);
    c = (c - y) * 100;
    p = p * 10 + x;
    r = c - y;
  }

  return s;
};

console.log(sqrt(2, 4));
