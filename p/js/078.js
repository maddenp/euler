/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var n = 1;

const check = (a, zeros) => {
  for (var i = a.length - 1; i > a.length - 1 - zeros; i--) {
    if (a[i] !== 0) return false;
  }
  return true;
}
  
while (true) {
  var a = pm.partitions.p3(n);
  if (check(a, 6)) {
    console.log(n);
    break;
  }
  n++;
}
