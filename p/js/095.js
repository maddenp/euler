/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

const f = (n, o) => {
  if (sums[n] === 0) {
    o.len = 0;
  } else if (o.seen[n]) {
    if (n < o.min) o.min = n;
    if (o.len > maxlen) {
      maxlen = o.len;
      minval = o.min;
    }
    o.len = 0;
  } else {
    o.seen[n] = true;
    o.len++;
    f(sums[n], o);
    if (o.len === 0) sums[n] = 0;
  }
};

const limit = 1e6;
const sums = [0, 0];

var maxlen = 0;
var minval = 0;

for (var n = 2; n <= limit; n++) sums[n] = 1;

for (var n = 2; n <= limit; n++) {
  for (var m = n + n; m <= limit; m += n) {
    sums[m] = sums[m] + n > limit ? 0 : sums[m] + n;
  }
}

for (var n = 2; n <= limit; n++) {
  if (sums[n] === 0) continue;
  f(n, {min: Number.MAX_SAFE_INTEGER, len: 0, seen: {}});
}

console.log(minval);
