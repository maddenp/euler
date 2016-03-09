/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const f_rec = (limit, depth) => {
  if (depth === limit) {
    return {num: [2], den: [1]};
  } else {
    const x = f_rec(limit, depth + 1);
    return {num: pm.array_add(pm.array_mult(x.num, 2), x.den), den: x.num};
  }
};

const f = limit => {
  const x = f_rec(limit, 1);
  return {num: pm.array_add(x.num, x.den), den: x.num};
};

var count = 0;

for (var i = 1; i <= 1000; i++) {
  var x = f(i);
  if (x.num.length > x.den.length) ++count;
}

console.log(count);
