/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const n = 200;
const ways = [1];

for (var i = 0; i < coins.length; i++) {
  var c = coins[i];
  for (var t = c; t <= n; t++) {
    ways[t] = (ways[t] || 0) + ways[t - c];
  }
}

console.log(ways[n]);
