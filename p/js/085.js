/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const s = n => (n * (n + 1)) / 2;

var area;
var min_diff = Number.MAX_SAFE_INTEGER;

for (var rows = 1; rows <= 100; rows++) {
  for (var cols = 1; cols <= rows; cols++) {
//     var rectangles = (rows * (rows + 1) / 2) * (cols * (cols + 1) / 2);
    var rectangles = s(rows) * s(cols);
    var diff = Math.abs(2000000 - rectangles);
    if (diff < min_diff) {
      min_diff = diff;
      area = rows * cols;
    }
  }
}

console.log(area);
