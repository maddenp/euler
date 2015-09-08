/* jshint node: true */

"use strict";

function array_sum(a) {
  return (a.reduce(function(m,e) { return m + e; }, 0));
}

function maybe_add(a, x, limit) {
  if (x < limit && amicable_numbers.indexOf(x) === -1) {
    a.push(x);
  }
}

function proper_divisors(n) {
  var pds = [1];
  for (var d = 2; d <= Math.sqrt(n); d++) {
    if (n % d === 0) {
      pds.push(d);
      if (n/d !== d) {
        pds.push(n/d);
      }
    }
  }
  return pds;
}

function sum_of_proper_divisors(n) {
  return array_sum(proper_divisors(n));
}

var limit = 10000;
var amicable_numbers = [];

for (var n = 1; n < limit; n++) {
  var s = sum_of_proper_divisors(n);
  var m = sum_of_proper_divisors(s);
  if (m === n && s !== n) {
    maybe_add(amicable_numbers, n, limit);
    maybe_add(amicable_numbers, s, limit);
  }
}

console.log(array_sum(amicable_numbers));
