/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const paths = M => {
  const exclude = T => T[0] > M && T[1] > M;
  const trips = pm.pythagorean_triples(exclude);
  var count = 0;
  for (var i = 0; i < trips.length; i++) {
    var T = trips[i];
    var a = T[0];
    var b = T[1];
    if (a <= M && b < 2 * a) {
      count += Math.floor(Math.abs(b/2 - (b-a))) + 1;
    }
    if (b <= M && a < 2 * b) {
      count += Math.floor(a/2);
    }
  }
  return count;
};

const limit = 1000000;
var last = 0;
var M = 100; // initial guess

while (true) {
  var p = paths(M);
  if (p < limit) {
    last = M;
    M *= 2;
  }
  if (p > limit) {
    if (M - last === 1) {
      console.log(M);
      break;
    }
    M = Math.floor((M+last) / 2);
  }
}
