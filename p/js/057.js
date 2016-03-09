/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

// 1 + 1/2 = 3/2 = 1.5
// 1 + 1/(2 + 1/2) = 7/5 = 1.4
// 1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
// 1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...

const pm = require('./pm');

const f_rec = (limit, depth) => {
  if (depth === limit) {
    return {num: 2, den: 1};
  } else {
    const x = f_rec(limit, depth + 1);
    return {num: 2 * x.num + x.den, den: 1 * x.num};
  }
};

const f = limit => {
  const x = f_rec(limit, 1);
  return {num: x.num + x.den, den: x.num};
};

for (var i = 1; i <= 100; i++) {
  var x = f(i);
  var yep = pm.ndigits(x.num) > pm.ndigits(x.den) ? '###' : '';
  console.log(yep, x);
}
