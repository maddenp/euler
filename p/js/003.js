/* jshint node: true */
/*jslint indent: 2 */
/*jslint white: true */

"use strict";

var i, n;

for (n = 600851475143, i = 2; i < n; i++) {
  while (n % i === 0) {
    n /= i;
  }
}
console.log(i);
