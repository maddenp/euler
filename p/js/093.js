/* jshint esversion: 6 */
/* jshint evil:true */
/* jshint loopfunc: true */
/* jshint node: true */

"use strict";

const pm = require('./pm');

const exprs = [];
const op = ['+', '-', '*', '/'];

for (var i0 = 0; i0 < op.length; i0++) {
  for (var i1 = 0; i1 < op.length; i1++) {
    for (var i2 = 0; i2 < op.length; i2++) {
      [
        `((a${op[i0]}b)${op[i1]}c)${op[i2]}d`,
        `(a${op[i0]}(b${op[i1]}c))${op[i2]}d`,
        `(a${op[i0]}b)${op[i1]}(c${op[i2]}d)`,
        `a${op[i0]}((b${op[i1]}c)${op[i2]}d)`,
        `a${op[i0]}(b${op[i1]}(c${op[i2]}d))`
      ].forEach(s => exprs.push(s));
    }
  }
}

const ok = (n) => n > 0 && Number.isInteger(n);
const f = eval(`(a, b, c, d) => [${exprs.join(',')}].reduce((m, e) => ok(e) ? (m[e] = 1, m) : m, o)`);

var max_run = 0;
var abcd;

for (var a = 0; a <= 9; a++) {
  for (var b = a + 1; b <= 9; b++) {
    for (var c = b + 1; c <= 9; c++) {
      for (var d = c + 1; d <= 9; d++) {
        var o = {};
        pm.permutations_map([a, b, c, d], (a) => f(a[0], a[1], a[2], a[3], o));
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
