/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const is_magic = a => {
  for (var i = 0; i < 5 * 3; i += 3) {
    if (pm.array_sum(a.slice(i, i + 3)) !== required_sum) return false;
  }
  return true;
};

const update_max = a => {

  // If a number < 6 appears on the periphery, its line will be selected as the
  // starting point, so that the solution will start with a number < 6. So, the
  // best we can do is to assure that 6, 7, 8, 9, and 10 appear on the periphery
  // so that the least of them, 6, will begin the solution. Note that it could
  // be the case that no such magic ring exists, so this constraint will either
  // cause no solution to be found, or speed the discovery of the correct one.

  if ([a[0], a[3], a[5], a[7], a[9]].some(n => n < 6)) return;
  const b = [
    a[0], a[1], a[2],
    a[3], a[2], a[4],
    a[5], a[4], a[6],
    a[7], a[6], a[8],
    a[9], a[8], a[1]
  ];
  if (is_magic(b)) {
    const idx = b.indexOf(6);
    const n = parseInt(b.slice(idx).concat(b.slice(0, idx)).join(''));
    if (n > max) max = n;
  }
};

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Since the numbers < 6 must form the inner ring, each of them will be counted
// twice in the total line sum. And the max sum for a line is 1/5 of this total
// line sum.

const required_sum = ((1 + 2 + 3 + 4 + 5) * 2 + 6 + 7 + 8 + 9 + 10) / 5;

var max = 0;

pm.permutations_map(a, update_max);

console.log(max);
