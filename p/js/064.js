/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const f = (o) => {
  o.b = (o.n - o.c * o.c) / o.b;
  o.a = Math.floor((Math.sqrt(o.n) - o.c) / o.b);
  o.c = -o.c - o.a * o.b;
  return o;
}

const n = 23;
const a = Math.floor(Math.sqrt(n));
const b = 1;
const c = -a;

var o = {n, a, b, c};
console.log(o);

for (var i = 0; i < 10; i++) {
  o = f(o);
  console.log(o);
}
