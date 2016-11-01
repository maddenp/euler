/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const limit = 2000000;

var area;
var min_diff = Number.MAX_SAFE_INTEGER;

// In the forums, euler observes that a rectangle is composed of two vertical
// and two horizontal lines. In a grid with c columns, there are c + 1 lines.
// To choose 2 lines from these, the "n choose k" forumla reduces to s(). Later,
// we find the number of ways to choose two vertical and two horizontal lines,
// i.e. the number of ways to choose a rectangle.

const s = n => (n * (n + 1)) / 2;

// The number of rectangles is maximized along the diagonal of a matrix of
// column and row sizes, e.g.
//
//    |   1   2   3   4
//  -------------------
//  1 |   1   3   6  10
//  2 |   3   9  18  30
//  3 |   6  18  36  60
//  4 |  10  30  60 100
//
// That is, the number of rectangles in a 4 x 4 grid is 100, and all other
// counts in the matrix are smaller. So, we can find the max row/column
// dimension by looking for the first n where an n x n grid has > 2000000
// rectangles. Then, the optimal row and column combination will be somewhere
// in the matrix.

for (var max = 1; s(max) < limit; max++);

// Since the matrix is symmetrical, we only need to consider the upper-
// triangular matrix.

for (var rows = 1; rows <= max; rows++) {
  for (var cols = 1; cols <= rows; cols++) {
    var rectangles = s(rows) * s(cols);
    var diff = Math.abs(limit - rectangles);
    if (diff < min_diff) {
      min_diff = diff;
      area = rows * cols;
    }
  }
}

console.log(area);
