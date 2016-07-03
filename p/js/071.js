/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 1000000;

var left_n = 0;
var left_d = 1;
var left = left_n / left_d;

const right = 3 / 7;

for (var n = 1; n <= limit - 1; n++) {
  for (var d = n * 2; d <= limit; d++) {
    var r = n / d;
    if (r < left) continue;
    if (r < right && r > left) {
      left_n = n;
      left_d = d;
      left = r;
      continue;
    }
  }
}

console.log(left_n + '/' + left_d + ' = ' + left);

    
