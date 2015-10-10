/* jshint node: true */

"use strict";

var mult_array = function(a, n) {
  var carry = 0;
  for (var i = a.length-1; i >= 0; i--) {
    a[i] *= n;
    if (carry !== 0) {
      a[i] += carry;
      carry = 0;
    }
    if (a[i] > 9) {
      if (i === 0) {
        while (a[0] > 10) {
          a.unshift(Math.floor(a[0]/10));
          a[1] %= 10;
        }
      } else {
        carry = Math.floor(a[i]/10);
        a[i] %= 10;
      }
    }
  }
};

for (var i=2, a=[1], n=100; i < n+1; i++) {
  mult_array(a, i);
}

console.log(a.reduce(function(m, e) { return m + e; }, 0));
