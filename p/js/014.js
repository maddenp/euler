/* jshint node: true */

"use strict";

function chainlen(n) {
  for (var m = n, s = 1; m > 1; s++) {
    m = (m & 1 === 1) ? (3 * m + 1) : (m >>> 1);
    if (known[m]) {
      s += known[m]
      break;
    }
  }
  known[n] = s;
  return s;
}

var known = [], maxlen = 1, maxn = 1, n;

for (n = 1; n < 1000000; n++) {
  var c = chainlen(n);
  if (c > maxlen) {
    maxlen = c;
    maxn = n;
  }
}

console.log(maxn);
