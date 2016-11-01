/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var max = 77;

var min_cols;
var min_rows;
var min_diff = Number.MAX_SAFE_INTEGER;

for (var cols = 1; cols <= max; cols++) {
  for (var rows = 1; rows <= max; rows++) {
    var sum = 0;
    for (var col_left = 0; col_left < cols; col_left++) {
      for (var row_top = 0; row_top < rows; row_top ++) {
        for (var row_bottom = row_top; row_bottom < rows; row_bottom++) {
          for (var col_right = col_left; col_right < cols; col_right++) {
            sum++
          }
        }
      }
    }
    var diff = Math.abs(2000000 - sum);
    if (diff < min_diff) {
      min_cols = cols;
      min_rows = rows;
      min_diff = diff;
    }
  }
}

console.log(min_cols * min_rows);
