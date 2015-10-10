/* jshint node: true */

"use strict";

function arr2str(a) {
  return (a.reduce(function(m, e) { return m + e; }, ''));
}

function exponentiate(base, exponent) {
  var a = [base];
  for (var i = 2; i <= exponent; i++) mult_array(a, base);
  return a;
}

function mult_array(a, n) {
  var carry = 0;
  for (var i = a.length-1; i >= 0; i--) {
    a[i] *= n;
    if (carry !== 0) {
      a[i] += carry;
      carry = 0;
    }
    if (a[i] > 9) {
      if (i === 0) {
        while (a[0] >= 10) {
          a.unshift(Math.floor(a[0]/10));
          a[1] %= 10;
        }
      } else {
        carry = Math.floor(a[i]/10);
        a[i] %= 10;
      }
    }
  }
}

var limit = 100;
var ns = [];

for (var a = 2; a <= limit; a++) {
  for (var b = 2; b <= limit; b++) {
    ns.push(arr2str(exponentiate(a, b)));
  }
}

var sorted = ns.sort(function(n1, n2) { return n1 - n2; });

var uniques = sorted.reduce(function(m, e) { return m[m.length - 1] === e ? m : m.concat([e]); }, []);

console.log(uniques.length);
