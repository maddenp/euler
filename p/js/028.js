/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

for (var n=1, side=3, step=2, sum=1; side <= 1001; side += 2, step += 2) {
  for (var i = 0; i < 4; i++) {
    n += step;
    sum += n;
  }
}

console.log(sum);
