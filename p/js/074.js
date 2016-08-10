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
    var sum = 0;
    while (m > 0) {
      sum += factorials[m % 10];
      m = Math.floor(m / 10);
    }
    m = sum;
    if (seen[m]) break;
    seen[m] = true;
    count += 1;
  }
  if (count == 60) ++sixties;
}

console.log(sixties);
