/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const limit = 50;

var total = 0;

const sqd = (x0, y0, x1, y1) => (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0);

for (var w = 1; w <= limit; w++) {
  for (var h = w; h <= limit; h++) {
    total += w === h ? 3 : 6;
    for (var x0 = 0; x0 <= w; x0++) {
      for (var y1 = 1; y1 < h; y1++) {
        var sqd1 = sqd(x0,  h,  w, y1);
        var sqd2 = sqd( w, y1,  0,  0);
        var sqd3 = sqd(x0,  h,  0,  0);
        var asq = Math.min(sqd1, sqd2, sqd3);
        var csq = Math.max(sqd1, sqd2, sqd3);
        var bsq = sqd1 + sqd2 + sqd3 - asq - csq;
        if (asq + bsq === csq) total += w === h ? 1 : 2;
      }
    }
  }
}

console.log(total);
