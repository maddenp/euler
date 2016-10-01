/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const p = [1, 1];
const d = 1000000;
var n = 1;
while (true) {
  n++;
  var i = 0;
  while (true) {
    i++;
    var m1 = n - i * (3 * i - 1) / 2;
    var m2 = n - i * (3 * i + 1) / 2;
    var s = 1;
    if (i % 2 === 0) s = -1;
    p[n] = p[n] || 0;
    if (m1 >= 0) p[n] += s * p[m1];
    if (m2 >= 0) p[n] += s * p[m2];
    if (m1 < 0 && m2 < 0) break;
  }
  p[n] = p[n] % d;
  if (p[n] === 0) break;
}
console.log(n);
