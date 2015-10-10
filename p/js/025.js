/* jshint node: true */

"use strict";

function zero_pad(a, n) {
  for (var i = 0; i < n; i++) {
    a.unshift(0);
  }
}

function array_add(a1, a2) {
  var a3, carry, i;
  zero_pad((a1.length > a2.length ? a2 : a1), Math.abs(a1.length - a2.length));
  for (a3 = [], carry = false, i = a1.length - 1; i >= 0; i--) {
    a3[i] = a1[i] + a2[i];
    if (carry) {
      a3[i]++;
      carry = false;
    }
    if (a3[i] >= 10) {
      a3[i] -= 10;
      carry = true;
    }
    if (i === 0 && carry) a3.unshift(1);
  }
  return a3;
}

function array_reduce(a, init) {
  return (a.reduce(function(m, e) { return m + e; }, init));
}

var fib_new, fib_prev, fib_this, i;

for (fib_prev = [1], fib_this = [1], i = 2; fib_this.length < 1000; i++) {
  fib_new = array_add(fib_prev, fib_this);
  fib_prev = fib_this;
  fib_this = fib_new;
}

console.log(i);
