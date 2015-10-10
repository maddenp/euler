/* jshint node: true */
/*jslint indent: 2 */
/*jslint white: true */

"use strict";

var a, b, largest, p, q, r;

largest = 0;

for (a = 999; a > 99; a--) {
  for (b = a; b > 99; b--) {
    p = a * b;
    q = p;
    r = 0;
    while (q > 0) {
      r = r * 10 + q % 10;
      q = Math.floor(q / 10);
    }
    if (r === p && p > largest) {
      largest = p;
    }
  }
}

console.log(largest);
