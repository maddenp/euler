/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

const limit = 1000000;
const sums = {1: 0};
const top = Number.MAX_SAFE_INTEGER;

for (var n = 2; n <= limit; n++) {
  if (sums[n]) continue;
  var m = n;
  while (!sums[m]) {
    var s = pm.sum_of_proper_divisors(m);
    sums[m] = s > limit ? 0 : s;
    if (sums[m] === 0) break;
  }
}

var maxlen = 0;
var minval = 0;
var maxchain = [];

const f = (n, sums, stats, seen) => {
//   console.log(`f: n=${n} sums=${JSON.stringify(sums)} seen=${JSON.stringify(seen)} stafs=${JSON.stringify(stats)}`);
//   console.log(`f: n=${n} seen=${JSON.stringify(seen)} stafs=${JSON.stringify(stats)}`);
  if (sums[n] === 0) {
//     console.log(`zero: sums[${n}]=${sums[n]}`);
    stats.len = 0;
    return;
  }
  if (seen[n]) {
//     console.log(`looping at ${n}`);
    stats.min = Math.min(stats.min, n);
    if (stats.len > maxlen) {
      maxlen = stats.len;
      minval = stats.min;
      maxchain = stats.chain;
//       console.log(`set maxlen=${maxlen}, minval=${minval}, maxchain=${maxchain}`);
    }
    stats.len = 0;
    return;
  }
  seen[n] = true;
//   console.log(`marked seen[${n}] true`);
  stats.len++;
  stats.chain.push(n);
  f(sums[n], sums, stats, seen);
  if (stats.len === 0) {
    sums[n] = 0;
    return;
  }
};

for (var n = 2; n <= limit; n++) {
//   console.log('###',n);
  if (sums[n] === 0) {
//     console.log(`already zero: ${n}`);
    continue;
  }
  var stats = {min: Number.MAX_SAFE_INTEGER, len: 0, chain: []};
  f(n, sums, stats, {});
//   console.log('---',n,maxlen,JSON.stringify(maxchain),minval);
}

// console.log('@@@',maxlen,JSON.stringify(maxchain),minval);
console.log(minval);
