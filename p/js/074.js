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

// var ns = [69, 169];
// for (var x = 0; x < ns.length; x++) {
//   var n = ns[x];
for (var n = 1; n < 1000000; n++) {
  var count = 1;
  var m = n;
  var seen_arr = [n];
  var seen_map = {n: true};
  while (true) {
//     console.log(n + ': adding ' + m + ' (count ' + count + ')');
    var sum = 0;
    while (m > 0) {
      sum += factorials[m % 10];
      m = Math.floor(m / 10);
    }
    m = sum;
    if (chain_lengths[m])
    {
//       console.log(n + ': already know chain ' + m);
      count += chain_lengths[m];
      if (count == 60) ++sixties;
      var decrement = 1;
      for (var i = 0; i < seen_arr.length; i++) {
        var e = seen_arr[i];
        if (chain_lengths[e]) break;
//         console.log(n + ': setting length of ' + e + ' to ' + count);
        chain_lengths[e] = count;
        if (e === m) decrement = 0;
        count -= decrement;
      }
      break;
    }
    if (seen_map[m]) {
//       console.log(n + ': loop at ' + m);
      if (count == 60) ++sixties;
      var decrement = 1;
      for (var i = 0; i < seen_arr.length; i++) {
        var e = seen_arr[i];
        if (chain_lengths[e]) break;
//         console.log(n + ': setting length of ' + e + ' to ' + count);
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
//   console.log(JSON.stringify(chain_lengths));
}

console.log(sixties);
