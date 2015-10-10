/* jshint node: true */
/*jslint indent: 2 */
/*jslint white: true */

"use strict";

var d, m, n;

for (n = m = 2520, d = 11; d < 21; d++, m = n) {
  while (n % d !== 0) {
    n += m;
  }
}

console.log(n);
