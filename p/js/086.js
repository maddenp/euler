/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const f = (a, b, c) => {
  var len1 = Math.sqrt((a + b) * (a + b) + c * c);
  var len2 = Math.sqrt((a + c) * (a + c) + b * b);
  var minlen = len1 < len2 ? len1 : len2;
  if (Math.floor(minlen) === minlen) ++sum;
};

const init = x => {
  for (var a = 1; a <= x; a++) {
    for (var b = a; b <= x; b++) {
      for (var c = b; c <= x; c++) f(a, b, c);
    }
  }
};

const incr = x => {
  for (var a = x; a <= x; a++) {
    for (var b = 1; b <= x; b++) {
      for (var c = 1; c <= x; c++) f(a, b, c);
    }
  }
};

var M = 1816;
var sum = 0;

init(++M);
const lo = sum;
incr(++M);
const hi = sum;

const limit = 1000000;

if (lo < limit && hi >= limit) {
  console.log(M);
}
