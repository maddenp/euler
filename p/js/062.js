/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const is_cbrt = n => {
  const x = Math.cbrt(n);
  return Math.floor(x) === x;
};

var n = 1;

while (true) {
  var cube = Math.pow(n, 3);
  var perms = pm.permarray(pm.n2a(cube));
  var perms = perms.filter(a => a[0] !== 0);
  var perms = pm.array_n_sort(perms.map(pm.a2n));
  var uniqs = [];
  for (var i = 0; i < perms.length; i++) {
    if (uniqs.length === 0 || perms[i] !== uniqs[uniqs.length - 1]) {
      uniqs.push(perms[i]);
    }
  }
  var ncubes = uniqs.reduce((m, e) => is_cbrt(e) ? m + 1 : m, 0);
  if (ncubes === 3) {
    console.log(cube);
    break;
  }
  ++n;
}
