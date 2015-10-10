/* jshint node: true */

"use strict";

function log(n) {
  return Math.log(n) / Math.log(10);
}

var cycle_start, decimals, d, i, n, n_seen, q, shift;

var longest = { d: 2, length: 0 };

for (d = 2; d < 1000; d++) {
  decimals = [];
  n_seen = [];
  n = 1;
  while (true) {
    for (shift = -1; n < d; shift++) n *= 10;
    if ((cycle_start = n_seen.indexOf(n)) >= 0) {
      if (cycle_start > 0 && shift > 0) --cycle_start;
      decimals = decimals.slice(cycle_start);
      break;
    }
    for (i = 0; i < shift; i++) {
      decimals.push(0);
      if (n_seen.indexOf(0) === -1) n_seen.push(0);
    }
    n_seen.push(n);
    q = Math.floor(n / d);
    decimals.push(q);
    n = (n - (d * q));
    if (n === 0) break;
  }
  if (decimals.length > longest.length) {
    longest.length = decimals.length;
    longest.d = d;
  }
}

console.log(longest.d);
