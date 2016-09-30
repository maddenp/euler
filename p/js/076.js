/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

for (var n = 1; n <= 100; n++) {
  var x = pm.partitions.p(n);
}

console.log(x - 1);
