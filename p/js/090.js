/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const choose = (a, k) => {
  if (k === 1) return a;
  let b = [];
  for (let i = 0; i < a.length; i++) {
    choose(a.slice(i + 1), k - 1).forEach(x => b.push([a[i]].concat(x)));
  }
  return b;
};

const combos = choose([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6);
console.log(combos.length);
