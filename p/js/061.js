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

const fns = [f3, f4, f5];//, f6, f7, f8];
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

const base = 5;
var nsbase = Object.keys(ns[base]);

for (var i1 = 0; i1 < nsbase.length; i1++) {
  var types = {};
  var soln = [];
  types[base] = true;
  var n1 = nsbase[i1];
  soln.push(n1);
  var hibase = ns[base][n1].hi;
  var candidates2 = his[ns[base][n1].lo];
  if (!candidates2) continue;
  for (var i2 = 0; i2 < candidates2.length; i2++) {
    var c2 = candidates2[i2];
    if (types[c2.t]) continue;
    types[c2.t] = true;
    var n2 = c2.n;
    soln.push(n2);
    var candidates3 = his[ns[c2.t][n2].lo];
    if (!candidates3) continue;
    for (var i3 = 0; i3 < candidates3.length; i3++) {
      var c3 = candidates3[i3];
      if (types[c3.t]) continue;
      types[c3.t] = true;
      var n3 = c3.n;
      soln.push(n3);
      if (Object.keys(types).length === 3) {
        var lolast = ns[c3.t][c3.n].lo;
        if (lolast === hibase) console.log(soln);
      }
      soln.pop();
      delete types[c3.t];
    }
    soln.pop();
    delete types[c2.t];
  }
}
