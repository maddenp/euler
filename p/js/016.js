/* jshint node: true */

"use strict";

var double_array = function (a) {
  var carry = false;
  for (var i = a.length-1; i >= 0; i--) {
    a[i] *= 2;
    if (carry) {
      a[i] += 1;
      carry = false;
    }
    if (a[i] > 9) {
      a[i] -= 10;
      if (i === 0) {
        a.unshift(1);
      } else {
        carry = true;
      }
    }
  }
};

var a = [1];
for (var i = 0; i < 1000; i++) double_array(a);

console.log(a.reduce(function (m, e) { return m + e; }));
