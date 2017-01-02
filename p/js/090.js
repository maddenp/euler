/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const f = (a, i, k) => {
  if (k === 1) return a.slice(i);
  const b = [];
  for (var j = i; j < a.length; j++) {
    f(a, j + 1, k - 1).forEach(x => b.push([a[j]].concat(x)));
  }
  return b;
};

const combos = f([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 6);
console.log(combos.length);
