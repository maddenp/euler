/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const choose = (a, k) => {
  if (k === 1) return a;
  let b = [];
  for (let i = 0; i < a.length; i++) {
    var sub = choose(a.slice(i + 1), k - 1);
    for (let j = 0; j < sub.length; j++) b.push([a[i]].concat(sub[j]));
  }
  return b;
};

const has = (a, e) => {
  if (e === 6 || e === 9) {
    return a.indexOf(6) !== -1 || a.indexOf(9) !== -1;
  }
  return a.indexOf(e) !== -1;
};

const valid = (a1, a2) => {
  const s1 = [0, 0, 0, 1, 2, 3, 4, 6, 8];
  const s2 = [1, 4, 9, 6, 5, 6, 9, 4, 1];
  for (let i = 0; i < s1.length; i++) {
    if ((has(a1, s1[i]) && has(a2, s2[i])) || (has(a1, s2[i]) && has(a2, s1[i]))) continue;
    return false;
  }
  return true;
};

const combos = choose([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6);

var count = 0;

for (let i = 0; i < combos.length; i++) {
  for (let j = i + 1; j < combos.length; j++) {
    if (valid(combos[i], combos[j])) count++;
  }
}

console.log(count);
