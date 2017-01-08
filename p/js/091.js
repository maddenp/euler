/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const limit = 50;

var total = 0;

const sqd = (x0, y0, x1, y1) => (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0);

for (var w = 1; w <= limit; w++) {
  for (var h = w; h <= limit; h++) {
    var count = w === h ? 3 : 6;
    var y0 = h;
    var x1 = w;
    for (var x0 = 0; x0 <= w; x0++) {
      for (var y1 = 1; y1 < h; y1++) {
        var sqd1 = sqd(x0, y0, x1, y1);
        var sqd2 = sqd(x1, y1,  0,  0);
        var sqd3 = sqd(x0, y0,  0,  0);
        var maxd = Math.max(sqd1, sqd2, sqd3);
        if (maxd === sqd1) {
          var asq = sqd2;
          var bsq = sqd3;
          var csq = sqd1;
        } else if (maxd === sqd2) {
          var asq = sqd1;
          var bsq = sqd3;
          var csq = sqd2;
        } else if (maxd === sqd3) {
          var asq = sqd1;
          var bsq = sqd2;
          var csq = sqd3;
        }
        if (asq + bsq === csq) {
          count += 1;
          if (w !== h) count += 1;
        }
      }
    }
    total += count;
  }
}

console.log(total);
