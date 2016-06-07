/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const gon = 3;

const is_magic = a => {
  var sum;
  for (var i = 0; i < gon; i++) {
    var offset = i * 3;
    var b = a.slice(offset, offset + 3);
    var line_sum = pm.array_sum(b);
    if (i === 0) sum = line_sum;
    if (line_sum !== sum) return false;
  }
  return true;
};

const rotate = a => {
  var idx_of_lowest = a.length;
  var val_of_lowest = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < gon; i++) {
    var offset = i * 3;
    if (a[offset] < val_of_lowest) {
      idx_of_lowest = offset;
      val_of_lowest = a[offset];
    }
  }
  return a.slice(idx_of_lowest).concat(a.slice(0, idx_of_lowest));
};

const update_max = a => {
  const b = [
    a[0], a[1], a[2],
    a[4], a[2], a[3],
    a[5], a[3], a[1]
  ];
  if (is_magic(b)) {
    const n = pm.a2n(rotate(b));
    if (n > max) max = n;
  }
};

var a = [1, 2, 3, 4, 5, 6];

var max = 0;

pm.permutations_map(a, update_max);

console.log(max);
