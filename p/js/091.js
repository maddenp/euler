/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const limit = 50;

var total = 0;

const sqd = (x0, y0, x1, y1) => Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2);

/*
 * Iterate over rectangles (including squares) in the grid. At each iteration,
 * we only need to consider new rectagles created by the increased width and/or
 * height dimensions, as all the triangles in the subproblem rectangles have
 * already been counted. We only consider the tall-and-thin rectangles, and
 * double our counts for their short-and-fat counterparts: The latter contain
 * an equal number of triangles due to symmetry, unless the rectangle is square,
 * so that the reflection yields no new triangles. Rectangles each contain four
 * basic triangles where the triangle vertices coincide with rectangle corners;
 * we always count 3 of these (the fourth has no vertex at (0,0), or 6 for non-
 * squares, again due to symmetry.
 *
 */

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
