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

const has = (a, e) => {
  if (e === 6 || e === 9) {
    return a.indexOf(6) !== -1 || a.indexOf(9) !== -1;
  }
  return a.indexOf(e) !== -1;
}

const ok = (a1, a2) => {
  const s1 = [0, 0, 0, 1, 2, 3, 4, 6, 8];
  const s2 = [1, 4, 9, 6, 5, 6, 9, 4, 1];
  for (var i = 0; i < s1.length; i++) {
    var e1 = s1[i];
    var e2 = s2[i];
    var x1 = has(a1, e1);
    var x2 = has(a2, e2);
    var c1 = x1 && x2;
    if (c1) {
      continue;
    }
    var x3 = has(a1, e2);
    var x4 = has(a2, e1);
    var c2 = x3 && x4;
    if (c2) {
      continue;
    }
    return false;
  }
  return true;
};

const combos = choose([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6);

var count = 0;

for (var i = 0; i < combos.length; i++) {
  for (var j = i + 1; j < combos.length; j++) {
    if (ok(combos[i], combos[j])) {
      count++;
    }
  }
}

console.log(count);
