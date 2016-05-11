/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const f = (i, limit) => {
  const k = Math.floor((i - 1) / 3) + 1;
  const a = i % 3 === 2 ? 2 * k : 1;
  if (i === limit) return {num: 1, den: a};
  const x = f(i + 1, limit);
  return {num: x.den, den: a * x.den + x.num};
}

const g = limit => {
  const x = f(1, limit - 1);
  return {num: 2 * x.den + x.num, den: x.den};
}

const n = 10;

console.log(pm.array_sum(pm.n2a(g(n).num)));
