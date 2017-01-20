/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const f = (a, b, c, d, o) => {
  const op = ['+', '-', '*', '/'];
  for (var i0 = 0; i0 < op.length; i0++) {
    for (var i1 = 0; i1 < op.length; i1++) {
      for (var i2 = 0; i2 < op.length; i2++) {
        [
          `  ${a} ${op[i0]}   ${b}  ${op[i1]}  ${c}   ${op[i2]} ${d}`  ,
          `( ${a} ${op[i0]}   ${b}) ${op[i1]}  ${c}   ${op[i2]} ${d}`  ,
          `  ${a} ${op[i0]} ( ${b}  ${op[i1]}  ${c})  ${op[i2]} ${d}`  ,
          `  ${a} ${op[i0]}   ${b}  ${op[i1]} (${c}   ${op[i2]} ${d})` ,
          `( ${a} ${op[i0]}   ${b}) ${op[i1]} (${c}   ${op[i2]} ${d})` ,
          `( ${a} ${op[i0]}   ${b}  ${op[i1]}  ${c})  ${op[i2]} ${d}`  ,
          `((${a} ${op[i0]}   ${b}) ${op[i1]}  ${c})  ${op[i2]} ${d}`  ,
          `( ${a} ${op[i0]} ( ${b}  ${op[i1]}  ${c})) ${op[i2]} ${d}`  ,
          `  ${a} ${op[i0]} ( ${b}  ${op[i1]}  ${c}   ${op[i2]} ${d})` ,
          `  ${a} ${op[i0]} ((${b}  ${op[i1]}  ${c})  ${op[i2]} ${d})` ,
          `  ${a} ${op[i0]} ( ${b}  ${op[i1]} (${c}   ${op[i2]} ${d}))`
        ].reduce((m, e) => {
          var x = eval(e);
          if (x > 0 && x === Math.floor(x)) m[x] = true;
          return m;
        }, o);
      }
    }
  }
};

var max_run = 0;
var abcd;

for (var a = 0; a <= 9; a++) {
  for (var b = a + 1; b <= 9; b++) {
    for (var c = b + 1; c <= 9; c++) {
      for (var d = c + 1; d <= 9; d++) {
        var aa = [a, b, c, d];
        const o = {};
        pm.permutations_map(aa, (arr) => f(arr[0], arr[1], arr[2], arr[3], o));
        for (var i = 1; o[i]; i++);
        i--;
        if (i > max_run) {
          max_run = i;
          abcd = `${a}${b}${c}${d}`;
        }
      }
    }
  }
}

console.log(abcd);
