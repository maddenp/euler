/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const g = n => {
  
  const f = (o) => {
    o.b = (o.n - o.c * o.c) / o.b;
    o.a = Math.floor((Math.sqrt(o.n) - o.c) / o.b);
    o.c = -o.c - o.a * o.b;
  };

  const a = Math.floor(Math.sqrt(n));
  const b = 1;
  const c = -a;
  const seen = {b: {c: true}};

  var o = {n, a, b, c};

  for (var i = 0; i < 10; i++) {
    f(o);
    if (seen[o.b] && seen[o.b][o.c]) return i;
    seen[o.b] = seen[o.b] || {};
    seen[o.b][o.c] = true;
  }
  console.log(seen);
};

for (var n = 2; n <= 13; n++) {
  if (Math.sqrt(n) !== Math.floor(Math.sqrt(n))) {
    console.log(n, g(n));
  }
}
