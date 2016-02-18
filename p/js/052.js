/* jshint node: true */

"use strict";

var pm = require('./pm');

function is_permutation(a, n) {
  var a1 = a.slice().sort();
  var a2 = pm.n2a(n).sort();
  if (a1.length !== a2.length) return false;
  for (var i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

var a = [0];
var n = 0;

loop: while (++n) {
  pm.array_inc(a);
  if (a[0] === 1) { // See note 1
    for (var m = 2; m <= 6; m++) {
      if (!is_permutation(a, n * m)) continue loop;
    }
    console.log(n);
    break;
  }
}

/* Notes
 *
 * 1. If the most significant digit of the number under consideration is > 1,
 * then 6 times that leading digit will be at least 12, which will make the
 * 6x variant more digits than the 1x initial number, so that they cannot have
 * the same digits.
 *
 */
