/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

const f = (n, o) => {
  if (sums[n] === 0) {
    o.len = 0;
  } else if (o.seen[n]) {
    o.min = Math.min(o.min, n);
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

const limit = 1000000;
const sums = {1: 0};

var maxlen = 0;
var minval = 0;

const sopd = [];
for (var n = 1; n <= limit; n++) sopd[n] = 1;
for (var n = 2; n <= limit; n++) {
  for (var m = n + n; m <= limit; m += n) {
    sopd[m] += n;
  }
}

for (var n = 2; n <= limit; n++) {
  if (sums[n]) continue;
  var m = n;
  while (!sums[m]) {
    var s = sopd[m];
    sums[m] = s > limit ? 0 : s;
    if (sums[m] === 0) break;
  }
}

for (var n = 2; n <= limit; n++) {
  if (sums[n] === 0) continue;
  f(n, {min: Number.MAX_SAFE_INTEGER, len: 0, seen: {}});
}

console.log(minval);
