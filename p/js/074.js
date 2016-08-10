/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const factorials = {
  0: 1,
  1: 1,
  2: 2,
  3: 6,
  4: 24,
  5: 120,
  6: 720,
  7: 5040,
  8: 40320,
  9: 362880
}

const chain_lengths = {};

var sixties = 0;

for (var n = 1; n < 1000000; n++) {
  var count = 1;
  var m = n;
  var seen_arr = [n];
  var seen_map = {n: true};
  while (true) {
    var decrement = 1;
    var sum = 0;
    while (m > 0) {
      sum += factorials[m % 10];
      m = Math.floor(m / 10);
    }
    m = sum;
    if (chain_lengths[m] || seen_map[m])
    {
      if (chain_lengths[m]) count += chain_lengths[m];
      if (count == 60) ++sixties;
      for (var i = 0; i < seen_arr.length; i++) {
        var e = seen_arr[i];
        if (chain_lengths[e]) break;
        chain_lengths[e] = count;
        if (e === m) decrement = 0;
        count -= decrement;
      }
      break;
    }
    seen_arr.push(m);
    seen_map[m] = true;
    count += 1;
  }
}

console.log(sixties);
