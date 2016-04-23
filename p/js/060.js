/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const cat = (a, b) => parseInt(a + b);

const pairable = (p1, p2) => (
  pm.prime.check(cat(p1, p2)) && pm.prime.check(cat(p2, p1)) ? true : false
);

var limit = 10000;
var low = Number.MAX_SAFE_INTEGER;
var max = 0;
var roots = {};

const f = idx => {
  const p = pm.prime.at(idx);
  if (!roots[p]) {
    roots[p] = {};
    Object.keys(roots).forEach(q => {
      if (pairable(p, q)) {
        roots[p][q] = true;
        roots[q][p] = true;
      }
    });
  }
  return p;
};

for (var i1 = 1, a = 0; a < limit; i1++) {
  a = f(i1);
  if (a > max) max = a;
  var sum_a = a;
  if (sum_a * 5 > low) break;
  for (var i2 = i1 + 1, b = 0; b < limit; i2++) {
    b = f(i2);
    var sum_b = sum_a + b;
    if (sum_b + b * 3 > low) break;
    if (!roots[a][b]) continue;
    for (var i3 = i2 + 1, c = 0; c < limit; i3++) {
      c = f(i3);
      var sum_c = sum_b + c;
      if (sum_c + c * 2 > low) break;
      if (!roots[a][c] || !roots[b][c]) continue;
      for (var i4 = i3 + 1, d = 0; d < limit; i4++) {
        d = f(i4);
        var sum_d = sum_c + d;
        if (sum_d + d > low) break;
        if (!roots[a][d] || !roots[b][d] || !roots[c][d]) continue;
        for (var i5 = i4 + 1, e = 0; e < limit; i5++) {
          e = f(i5);
          var sum_e = sum_d + e;
          if (sum_e > low) break;
          if (!roots[a][e] || !roots[b][e] || !roots[c][e] || !roots[d][e]) continue;
          if (sum_e < low) low = sum_e;
        }
      }
    }
  }
}

if (low === Number.MAX_SAFE_INTEGER) {
  console.log('No solution found.');
} else if (max * 5 < low) {
  console.log('Search space too small.');
} else {
  console.log(low);
}
