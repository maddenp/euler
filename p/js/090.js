/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const f = (a, i, k) => {
//   console.log(`entry: a=${JSON.stringify(a)} i=${i} k=${k}`);
  if (k === 1) return a.slice(i);
  const b = [];
  for (var j = i; j < a.length; j++) {
//     console.log(`j=${j}`);
    var head = [a[j]];
//     console.log(`head=${JSON.stringify(head)}`);
    var tail = f(a, j + 1, k - 1);
//     console.log(`tail=${JSON.stringify(tail)}`);
    tail.forEach(x => {
      var y = head.concat(x);
//       console.log(`y=${JSON.stringify(y)}`);
      b.push(y);
    });
  }
//   console.log(`b=${JSON.stringify(b)}`);
  return b;
};

console.log(f([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 6).length);
