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

const f = (p, x) => pm.array_times_int(pm.array_add(pm.array_times_int(p, 20), pm.n2a(x)), x); // must we n2a(x)?

const sqrt = (n, decimal_places) => {
  
  var c = [n];
  var p = [0];
  var r = [0];
  var s = [];

  // TODO common subexpression elimination

  for (var i = 0; i <= decimal_places; i++) {
    for (var x = 0; true; x++) {
      var f1 = f(p, x + 1);
      var f2 = pm.array_comp(f1, c);
      if (f2 > 0) break;
    }
    var y = f(p, x);
    c = pm.array_times_int(pm.array_sub(c, y), 100);
    p = pm.array_add(pm.array_times_int(p, 10), pm.n2a(x));
    r = pm.array_sub(c, y);
    if (x > 9) {
      s[s.length - 1]++;
      x %= 10;
    }
    s.push(x);
  }

  return s;

};

console.log(pm.array_sum(sqrt(2, 99)));
