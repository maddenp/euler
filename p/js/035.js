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

function bisection_search(a, x) {
  var lbound = 0;
  var ubound = a.length - 1;
  while (lbound <= ubound) {
    if (lbound === ubound) {
      if (a[lbound] === x) return lbound;
      break;
    }
    var length = ubound - lbound + 1;
    var even = length % 2 === 0;
    var mp = Math.round(lbound + length / 2);
    if (a[mp] === x) return mp;
    if (even && a[mp - 1] === x) return mp - 1;
    if (a[mp] < x) {
      lbound = mp + 1;
    } else {
      ubound = mp - 1;
    }
  }
  return undefined;
}

var solution_limit = 1000000;
var prime_limit = solution_limit * 10;
var primes = pm.primes_up_to(prime_limit);
var nsolutions = 0;

function is_prime(n) {
  return bisection_search(primes, n) !== undefined;
}

for (var i = 2; i < solution_limit; i++) {
  if (rotations(i).every(is_prime)) ++nsolutions;
}

console.log(nsolutions);
