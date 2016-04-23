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
var p = 0;
var primeidx = 0;
var roots = {};

while (p < limit) {
  var p = pm.prime.at(primeidx++);
  if (p === 2 || p === 5) continue;
  roots[p] = {};
  Object.keys(roots).forEach(q => {
    if (pairable(p, q)) {
      roots[p][q] = true;
      roots[q][p] = true;
    }
  });
}

const k = Object.keys(roots);

for (var i1 = 0; i1 < k.length; i1++) {
  var a = k[i1];
  var ia = parseInt(a);
  if (ia > max) max = ia;
  var sum_a = ia;
  if (sum_a * 5 > low) break;
  for (var i2 = i1 + 1; i2 < k.length; i2++) {
    var b = k[i2];
    var ib = parseInt(b);
    var sum_b = sum_a + ib;
    if (sum_b + ib * 3 > low) break;
    if (!roots[a][b]) continue;
    for (var i3 = i2 + 1; i3 < k.length; i3++) {
      var c = k[i3];
      var ic = parseInt(c);
      var sum_c = sum_b + ic;
      if (sum_c + ic * 2 > low) break;
      if (!roots[a][c] || !roots[b][c]) continue;
      for (var i4 = i3 + 1; i4 < k.length; i4++) {
        var d = k[i4];
        var id = parseInt(d);
        var sum_d = sum_c + id;
        if (sum_d + id > low) break;
        if (ia + ib + ic + id * 2 > low) break;
        if (!roots[a][d] || !roots[b][d] || !roots[c][d]) continue;
        for (var i5 = i4 + 1; i5 < k.length; i5++) {
          var e = k[i5];
          var ie = parseInt(e);
          var sum_e = sum_d + ie;
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
