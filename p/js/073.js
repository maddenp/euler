/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const n = 12000;

var a = 0;
var b = 1;
var c = 1;
var d = n;

const as = [];
const bs = [];

as.push(a);
bs.push(b);

while (c <= n) {
  var k = Math.floor((n + b) / d);
  var old_a = a;
  var old_b = b;
  a = c;
  b = d;
  c = k * c - old_a;
  d = k * d - old_b;
  as.push(a);
  bs.push(b);
}

var count = 0;

for (var i = 0; i < as.length; i++) {
  var x = as[i] / bs[i];
  if (x > 1/2 && x < 2/3) ++count;
}

console.log(count);
