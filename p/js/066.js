/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var max_len = 0;
var the_d = 0;

for (var d = 2; d <= 1000; d++) {
  if (Math.sqrt(d) === Math.floor(Math.sqrt(d))) continue;
  var fs_x = pm.pell_fundamental_solution(d)[0].toString();
  var len = fs_x.length;
  if (len > max_len) {
    max_len = len;
    the_d = d;
  }
}

console.log(the_d);
