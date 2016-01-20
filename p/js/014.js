/* jshint node: true */

"use strict";

function chainlen(n) {
  for (var m = n, s = 1; m > 1; s++) {
    m = (m & 1 === 1) ? (3 * m + 1) : (m >>> 1);
    if (known[m]) {
      return (known[n] = s + known[m]);
    }
  }
  return (known[n] = s);
}

var c, known = [], maxlen = 1, maxn = 1, n;

for (n = 1; n < 1000000; n++) {
  if ((c = chainlen(n)) > maxlen) {
    maxlen = c;
    maxn = n;
  }
}

console.log(maxn);
