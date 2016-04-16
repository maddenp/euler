/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const hi = 9999;
const lo = 1000;
const prime = pm.prime;

var x = [];

function invalidate(p, x) {
  for (var i = 0; i < p.length; i++) {
    x[prime.primes.indexOf(p[i])] = false;
  }
}

var answers = [];

function filter1(n) {
  return n >= lo && n <= hi;
}

function filter2(n) {
  return prime.check(n);
}

// Wow, this is awful.

for (var i = 0; prime.at(i) <= hi; i++) {
  if (x[i] === false) continue;
  var p = pm.uniques(pm.permarray(pm.n2a(prime.at(i))).map(pm.a2n), true);
  if (p.indexOf(1487) !== -1) {
    invalidate(p, x);
    continue;
  }
  p = p.filter(filter1).filter(filter2);
  var x = {};
  for (var j = 0; j < p.length; j++) {
    for (var k = j + 1; k < p.length; k++) {
      var diff = p[k] - p[j];
      if (!x[diff]) x[diff] = [];
      x[diff].push([p[j], p[k]]); 
    }
  }
  var sums = Object.keys(x);
  for (var index in sums) {
    var pairs = x[sums[index]];
    if (pairs.length === 2) {
      var elements = [pairs[0][0], pairs[0][1], pairs[1][0], pairs[1][1]];
      var uniques = pm.uniques(elements, true);
      if (uniques.length === 3) {
        answers.push(uniques.join(''));
      }
    }
  }
}

console.log(pm.uniques(answers)[0]);
