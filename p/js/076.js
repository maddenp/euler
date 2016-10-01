/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

console.log(pm.a2n(pm.partitions.p0(100)) - 1);
