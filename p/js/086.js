/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const M = 100;

for (var a = 1; a <= M; a++) {
  for (var b = a; b <= M; b++) {
    for (var c = b; c <= M; c++) {
      var len1 = Math.sqrt((a + b) * (a + b) + c * c);
      var len2 = Math.sqrt((a + c) * (a + c) + b * b);
      var minlen = len1 < len2 ? len1 : len2;
      if (Math.floor(minlen) === minlen) {
        console.log(a, b, c, minlen);
      }
    }
  }
}
