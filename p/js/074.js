/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const factorials = {
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
    m = pm.array_sum(pm.n2a(m).map(pm.factorial));
    if (seen[m]) break;
    seen[m] = true;
    ++count;
  }
  if (count == 60) ++sixties;

}

console.log(sixties);
