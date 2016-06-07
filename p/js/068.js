/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const is_magic = a => {
  var sum;
  for (var i = 0; i < gon; i++) {
    var offset = i * 3;
    var line_sum = 0;
    for (var j = offset; j < offset + 3; j++) line_sum += a[j];
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
  if ([a[1], a[2], a[4], a[6], a[8]].some(n => n === 10)) return;
  const b = [
    a[0], a[1], a[2],
    a[3], a[2], a[4],
    a[5], a[4], a[6],
    a[7], a[6], a[8],
    a[9], a[8], a[1]
  ];
  if (is_magic(b)) {
    const s = pm.a2s(rotate(b));
    const n = parseInt(s);
    if (n > max) max = n;
  }
};

const gon = 5;
const max_digit = gon * 2;
const a = pm.range(1, max_digit);

var max = 0;

pm.permutations_map(a, update_max);

console.log(max);
