/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var d, m, n;

for (n = m = 2520, d = 11; d < 21; d++, m = n) {
  while (n % d !== 0) {
    n += m;
  }
}

console.log(n);
