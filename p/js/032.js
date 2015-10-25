/* jshint node: true */

"use strict";

function array_sum(a) {
  return (a.reduce(function(m, e) { return m + e; }, 0));
}

function n2a(n) {
  var a = [];
  while (n > 0) {
    a.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  return a;
}

function ndigits(n) {
  return Math.floor(Math.log(n) / Math.log(10)) + 1;
}

function pandigital(f1, f2, p) {
  if (ndigits(f1) + ndigits(f2) + ndigits(p) !== 9) return false;
  var narray = (n2a(f1).concat(n2a(f2)).concat(n2a(p))).sort();
  for (var i = 0; i < narray.length; i++) {
    if (narray[i] !== [1, 2, 3, 4, 5, 6, 7, 8, 9][i]) return false;
  }
  return true;
}

function pp_find(f1_lo, f1_hi, f2_lo, f2_hi, pp) {
  for (var f1 = f1_lo; f1 < f1_hi; f1++) {
    for (var f2 = f2_lo; f2 < f2_hi; f2++) {
      var p = f1 * f2;
      if (pandigital(f1, f2, p) && pp.indexOf(p) === -1) pp.push(p);
    }
  }
}

var pp = [];

pp_find(1, 10, 1000, 10000, pp);
pp_find(10, 100, 100, 1000, pp);

console.log(array_sum(pp));
