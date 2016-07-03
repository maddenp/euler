/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 1000000;

const right = 3 / 7;

var left_n = 0;
var left_d = 1;
var left = left_n / left_d;

var n = left_n;
var d = left_d;

while (true) {
  if (d > limit) break;
  var r = n / d;
  if (r >= right) {
    d++;
  } else {
    if (r > left) {
      left_n = n;
      left_d = d;
      left = r;
      n++;
    } else {
      n++;
    }
  }
}

console.log(left_n);
