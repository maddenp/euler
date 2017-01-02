/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const choose = (a, k, i) => {
  if (k === 1) return a.slice(i);
  let b = [];
  for (let j = i; j < a.length; j++) {
    choose(a, k - 1, j + 1).forEach(x => b.push([a[j]].concat(x)));
  }
  return b;
};

const combos = choose([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6, 0);
console.log(combos.length);
