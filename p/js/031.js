/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const coins = [1, 2, 5, 10, 20, 50, 100, 200];

console.log(pm.a2n(pm.partitions.p2(200, coins)));
