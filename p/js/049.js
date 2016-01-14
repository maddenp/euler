/* jshint node: true */

"use strict";

var pm = require('./pm');

var lo = 1000, hi = 9999;
var result = pm.primes(lo, hi, true);
var primes = result[0];
var primes_map = result[1];

function invalidate(p, primes) {
  for (var i = 0; i < p.length; i++) {
    primes[primes.indexOf(p[i])] = false;
  }
}

for (var i = 0; i < primes.length; i++) {
  if (primes[i] === false) continue;
  var p = pm.uniques(pm.permarray(pm.n2a(primes[i])).map(pm.a2n), true);
  if (p.indexOf(1487) !== -1) {
    invalidate(p, primes);
    continue;
  }
  p = p.filter(function(n) { return n >= lo && n <= hi; });
  p = p.filter(function(n) { return primes_map[n] === true; });
  var pairs = [];
  for (var j = 0; j < p.length; j++) {
    for (var k = j + 1; k < p.length; k++) {
      if (p[k] - p[j] === 3330) {
        pairs.push([p[j], p[k]]);
      }
    }
  }
  if (pairs.length === 2) {
    invalidate(p, primes);
    console.log(pairs[0][0] + '' + pairs[0][1] + '' + pairs[1][1]);
  }
}
