/* jshint node: true */

"use strict";

var i, n;

for (n = 600851475143, i = 2; i < n; i++) {
  while (n % i === 0) {
    n /= i;
  }
}
console.log(i);
