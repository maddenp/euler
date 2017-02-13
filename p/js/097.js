/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

console.log(pm.a2n(pm.array_trunc(pm.array_times_int(pm.array_exp_trunc([2], 7830457, 10), 28433), 10)) + 1);
