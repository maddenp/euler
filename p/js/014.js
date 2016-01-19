/* jshint node: true */

"use strict";

function chainlen(n) {
  for (var s = 1; n > 1; s++) {
    n = (n & 1 === 1) ? (3 * n + 1) : (n / 2);
  }
  return s;
}

var maxlen = 1, maxn = 1, n;

for (n = 1; n < 1000000; n++) {
  var c = chainlen(n);
  if (c > maxlen) {
    maxlen = c;
    maxn = n;
  }
}

console.log(maxn);
