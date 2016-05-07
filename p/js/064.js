/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const period_length = n => {
  
  const a = Math.floor(Math.sqrt(n));
  const b = 1;
  const c = -a;
  const seen = {b: {c: true}};
  const o = {n, a, b, c};
  var i = 0;

  while (true) {
    o.b = (o.n - o.c * o.c) / o.b;
    o.a = Math.floor((Math.sqrt(o.n) - o.c) / o.b);
    o.c = -o.c - o.a * o.b;
    if (seen[o.b] && seen[o.b][o.c]) return i;
    seen[o.b] = seen[o.b] || {};
    seen[o.b][o.c] = true;
    ++i;
  }

};

const limit = 10000;
var odds = 0;

for (var n = 2; n <= limit; n++) {
  if (Math.sqrt(n) !== Math.floor(Math.sqrt(n))) {
    if (period_length(n) % 2 === 1) ++odds;
  }
}

console.log(odds);
