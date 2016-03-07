/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var n, sum;

sum = 0;

for (n = 1; n < 1000; n++) {
  if (n % 3 === 0 || n % 5 === 0) {
    sum += n;
  }
}

console.log(sum);
