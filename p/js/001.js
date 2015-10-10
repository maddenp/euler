/* jshint node: true */
/*jslint indent: 2 */
/*jslint white: true */

"use strict";

var n, sum;

sum = 0;

for (n = 1; n < 1000; n++) {
  if (n % 3 === 0 || n % 5 === 0) {
    sum += n;
  }
}

console.log(sum);
