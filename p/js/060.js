/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

/*
 * The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes
 * and concatenating them in any order the result will always be prime. For
 * example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four
 * primes, 792, represents the lowest sum for a set of four primes with this
 * property. Find the lowest sum for a set of five primes for which any two primes
 * concatenate to produce another prime.
*/

const limit = 1000;
const primes = pm.primes(1, limit);

const x = primes.reduce((m, e) => Object.defineProperty(m, e, {value: [], enumerable: true}), {});

for (var i = 0; i < primes.length; i++) {
  var p0 = primes[i];
  for (var j = 0; j < i; j++) {
    var p1 = primes[j];
    var n1 = p1 * Math.pow(10, pm.ndigits(p0)) + p0;
    var n2 = p0 * Math.pow(10, pm.ndigits(p1)) + p1;
    if (pm.prime.check(n1) && pm.prime.check(n2)) x[p0].push(p1);
  }
}

const search = (x, a, n) => {
  for (var i = 0; i < primes.length; i++) {
    var p = primes[i];
    if (p === a[0]) continue;
    var match = true;
    for (var j = 0; j < a.length; j++) {
      if (x[p][j] !== a[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      a.push(p);
      if (a.length === n) {
        return a;
      } else {
        return search(x, a, n);
      }
    }
  }
  return false;
};

for (var i = 0; i < primes.length; i++) {
  var result = search(x, [primes[i]], 4);
  if (result) {
    console.log(pm.array_sum(result));
    break;
  }
}
