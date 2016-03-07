/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var count = 0;

n: for (var n = 1; n < 10000; n++) {
  var a1 = pm.n2a(n);
  for (var i = 0; i <= 50; i++) {
    var a2 = pm.array_reverse(a1);
    var a3 = pm.array_add(a1, a2);
    if (pm.is_palindrome(a3)) continue n;
    a1 = a3;
  }
  ++count;
}

console.log(count);
