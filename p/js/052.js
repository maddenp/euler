/* jshint node: true */

"use strict";

var pm = require('./pm');

var n = 0;

function is_permutation(a, n) {
  var a1 = a.slice().sort();
  var a2 = pm.n2a(n).sort();
  if (a1.length !== a2.length) return false;
  for (var i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

n: while (++n) {
  var a = pm.n2a(n);
  for (var m = 2; m <= 6; m++) {
    if (!is_permutation(a, n * m)) continue n;
  }
  console.log(n);
  break;
}
