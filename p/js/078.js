/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const p = [1, 1];

for (var n = 2; true; n++) {
  p[n] = 0;
  for (var i = 0; true; i++) {
    var m1 = n - i * (3 * i - 1) / 2;
    var m2 = n - i * (3 * i + 1) / 2;
    if (m1 >= 0) p[n] += (i % 2 === 0 ? -1 : 1) * p[m1];
    if (m2 >= 0) p[n] += (i % 2 === 0 ? -1 : 1) * p[m2];
    if (m1 < 0 && m2 < 0) break;
  }
  p[n] = p[n] % 1000000;
  if (p[n] === 0) break;
}

console.log(n);
