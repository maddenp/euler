/* jshint node: true */

"use strict";

/*
 * Follow the Collatz chain and tally the number of steps to reach 1. However,
 * when encountering a chain element that has been seen before, make use of the
 * value memoized for that element and follow the chain no further. Note that
 * we will only have memoized elements lower than the current starting point,
 * so guard an expensive array lookup with a cheap comparison.
 */

function chainlen(n) {
  for (var m = n, s = 1; m > 1; s++) {
    m = ((m & 1) === 1) ? (3 * m + 1) : (m >>> 1);
    if (m < n && known[m]) {
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
