/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const coins = [1, 2, 5, 10, 20, 50, 100, 200];

console.log(pm.partitions(200, coins, coins.length - 1));
