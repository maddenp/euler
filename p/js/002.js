/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var a = 1, b = 2, sum = 0;

while (a < 4000000) {
  b += a;
  a = b - a;
  sum += a % 2 === 0 ? a : 0;
}

console.log(sum);
