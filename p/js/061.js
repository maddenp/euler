/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const f3 = n => (n * n + n) / 2;
const f4 = n => n * n;
const f5 = n => (3 * n * n - n) / 2;
const f6 = n => 2 * n * n - n;
const f7 = n => (5 * n * n - 3 * n) / 2;
const f8 = n => 3 * n * n - 2 * n;

const hi_lo = n => {
  const hi = Math.floor(n / 100);
  const lo = n - hi * 100;
  return {hi, lo};
};

const fns = [f3, f4, f5, f6, f7, f8];
const ns = {};
const his = {};
const los = {};

for (var i = 0; i < fns.length; i++) {
  var fn = fns[i];
  var t = i + 3;
  ns[t] = {};
  var j =1;
  while (true) {
    var n = fn(j);
    if (n > 9999) break;
    if (n > 999) {
      var hl = hi_lo(n);
      ns[t][n] = hl;
      var hi = hl.hi;
      his[hi] = his[hi] || [];
      his[hi].push({t, n});
      var lo = hl.lo;
      los[lo] = los[lo] || [];
      los[lo].push({t, n});
    }
    ++j;
  }
}

const base = 3;
var nsbase = Object.keys(ns[base]);

out: for (var i1 = 0; i1 < nsbase.length; i1++) {
  var soln = [];
  var types = {};
  var hibase = ns[base][nsbase[i1]].hi;
  var n1 = parseInt(nsbase[i1]);
  types[base] = true;
  soln.push(n1);
  var maybe2 = his[ns[base][n1].lo];
  if (maybe2) {
    for (var i2 = 0; i2 < maybe2.length; i2++) {
      var c2 = maybe2[i2];
      if (!types[c2.t]) {
        var n2 = c2.n;
        types[c2.t] = true;
        soln.push(n2);
        var maybe3 = his[ns[c2.t][n2].lo];
        if (maybe3) {
          for (var i3 = 0; i3 < maybe3.length; i3++) {
            var c3 = maybe3[i3];
            if (!types[c3.t]) {
              var n3 = c3.n;
              types[c3.t] = true;
              soln.push(n3);
              var maybe4 = his[ns[c3.t][n3].lo];
              if (maybe4) {
                for (var i4 = 0; i4 < maybe4.length; i4++) {
                  var c4 = maybe4[i4];
                  if (!types[c4.t]) {
                    var n4 = c4.n;
                    types[c4.t] = true;
                    soln.push(n4);
                    var maybe5 = his[ns[c4.t][n4].lo];
                    if (maybe5) {
                      for (var i5 = 0; i5 < maybe5.length; i5++) {
                        var c5 = maybe5[i5];
                        if (!types[c5.t]) {
                          var n5 = c5.n;
                          types[c5.t] = true;
                          soln.push(n5);
                          var maybe6 = his[ns[c5.t][n5].lo];
                          if (maybe6) {
                            for (var i6 = 0; i6 < maybe6.length; i6++) {
                              var c6 = maybe6[i6];
                              if (!types[c6.t]) {
                                var n6 = c6.n;
                                types[c6.t] = true;
                                soln.push(n6);
                                if (ns[c6.t][c6.n].lo === hibase) {
                                  console.log(pm.array_sum(soln));
                                }
                                soln.pop();
                                delete types[c6.t];
                              }
                            }
                          }
                          soln.pop();
                          delete types[c5.t];
                        }
                      }
                    }
                    soln.pop();
                    delete types[c4.t];
                  }
                }
              }
              soln.pop();
              delete types[c3.t];
            }
          }
        }
        soln.pop();
        delete types[c2.t];
      }
    }
  }
}
