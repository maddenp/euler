/* jshint node: true */

"use strict";

var pm = require('./pm.js');

function rotations(n) {
  var a = pm.n2a(n), d = pm.ndigits(n), r = [];
  for (var i = 0; i < d; i++) {
    var m = 0;
    for (var j = 0; j < d; j++) {
      m = m * 10 + a[(i + j) % d];
    }
    r.push(m);
  }
  return r;
}

function bisearch(a, lo, hi, x) {
  if (a[lo] === x) return lo;
  if (a[hi] === x) return hi;
  if (hi - lo < 2) return undefined;
  var mid = lo + (Math.floor((hi - lo) / 2));
  return a[mid] < x ? bisearch(a, mid, hi, x) : bisearch(a, lo, mid, x);
}

var solution_limit = 1000000;
var prime_limit = solution_limit * 10;
var primes = pm.primes_up_to(prime_limit);
var nsolutions = 0;

function is_prime(n) {
  return bisearch(primes, 0, primes.length - 1, n) !== undefined;
}

for (var i = 2; i < solution_limit; i++) {
  if (rotations(i).every(is_prime)) ++nsolutions;
}

console.log(nsolutions);
