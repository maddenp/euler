/* jshint node: true */
/*jslint indent: 2 */
/*jslint white: true */

"use strict";

var a, b, sum;

for (a = 1, b = 2, sum = 0; a < 4000000; b += a, a = b - a, sum += a % 2 === 0 ? a : 0) {}

console.log(sum);
