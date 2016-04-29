/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const o = {};

for (var n = 1; true; n++) {
  var cube = Math.pow(n, 3);
  var a = pm.n2a(cube);
  var histogram = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < a.length; i++) ++histogram[a[i]];
  var k = pm.a2s(histogram);
  o[k] = o[k] ? [o[k][0] + 1, o[k][1]] : [1, cube];
  if (o[k][0] === 5) break;
}

console.log(o[k][1]);
