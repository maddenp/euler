/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const factorials = {
  0: 1,
  1: 1,
  2: 2,
  3: 6,
  4: 24,
  5: 120,
  6: 720,
  7: 5040,
  8: 40320,
  9: 362880
}

var sixties = 0;

for (var n = 1; n < 1000000; n++) {
  var seen = {n: true};
  var count = 1;
  var m = n;
  while (true) {
    var a = pm.n2a(m);
    m = 0;
    for (var i = 0; i < a.length; i++) {
      m += factorials[a[i]];
    }
    if (seen[m]) break;
    seen[m] = true;
    count += 1;
  }
  if (count == 60) ++sixties;
}

console.log(sixties);
