/* jshint node: true */

"use strict";

var pm = require('./pm');

var goal = 8;
var limit = 1000000;
var primes_and_is_prime = pm.primes(1, limit, true);
var primes = primes_and_is_prime[0];
var is_prime = primes_and_is_prime[1];

out: for (var i = 0; i < primes.length; i++) {
  var solutions = [];
  var p = primes[i];
  var a = pm.n2a(p);
  var b = [];
  for (var bi = 0; bi < a.length; bi++) {
    b.push(0);
  }
  for (var j = 1; j < Math.pow(2, a.length) - 1; j++) {
    var count = 0;
    var c = a.slice();
    pm.array_inc(b, 2);
    var candidates = [];
    for (var k = 0; k < 10; k++) {
      for (var l = 0; l < a.length; l++) {
        if (b[l]) {
          c[l] = k;
        }
      }
      if (c[0] === 0) continue;
      var x = pm.a2n(c);
      if (is_prime[x]) {
        candidates.push(x);
        ++count;
        if (count === goal) {
          console.log(pm.array_min(candidates));
          break out;
        }
      }
    }
  }
}
