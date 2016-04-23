/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const cat = (a, b) => parseInt(a + b);

const pairable = (p1, p2) => (
  pm.prime.check(cat(p1, p2)) && pm.prime.check(cat(p2, p1)) ? true : false
);

var chunksize = 10000;
var limit = chunksize;
var low = Number.MAX_SAFE_INTEGER;
var p = 0;
var primeidx = 0;
var roots = {};

while (p < low) {

  while (p < limit) {
    var p = pm.prime.at(primeidx++);
    if (p === 2 || p === 5) continue;
    if (p > low) break;
    roots[p] = {};
    Object.keys(roots).forEach(q => {
      if (q !== p) {
        if (pairable(p, q)) {
          roots[p][q] = true;
          roots[q][p] = true;
        }
      }
    });
  }

  const k = Object.keys(roots);
  for (var i1 = 0; i1 < k.length; i1++) {
    var a = k[i1];
    if (parseInt(a) > low) continue;
    for (var i2 = i1 + 1; i2 < k.length; i2++) {
      var b = k[i2];
      if (parseInt(b) > low) continue;
      if (!roots[a][b]) continue;
      for (var i3 = i2 + 1; i3 < k.length; i3++) {
        var c = k[i3];
        if (parseInt(c) > low) continue;
        if (!roots[a][c] || !roots[b][c]) continue;
        for (var i4 = i3 + 1; i4 < k.length; i4++) {
          var d = k[i4];
          if (parseInt(d) > low) continue;
          if (!roots[a][d] || !roots[b][d] || !roots[c][d]) continue;
          for (var i5 = i4 + 1; i5 < k.length; i5++) {
            var e = k[i5];
            if (parseInt(e) > low) continue;
            if (!roots[a][e] || !roots[b][e] || !roots[c][e] || !roots[d][e]) continue;
            var sum = pm.array_sum([a, b, c, d, e].map(n => parseInt(n)));
            if (sum < low) low = sum;
          }
        }
      }
    }
  }

  limit = low === Number.MAX_SAFE_INTEGER ? limit + chunksize : low;

}

console.log(low);
