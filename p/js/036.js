/* jshint node: true */

"use strict";

var pm = require('./pm.js');

function a_is_palindrome(a) {
  for (var i = 0; i < Math.floor(a.length / 2); i++) {
    if (a[i] !== a[a.length - (i + 1)]) return false;
  }
  return true;
}

var double_base_palindromes = [];

for (var n = 1; n < 1000000; n++) {
  if (a_is_palindrome(pm.n2a_decimal(n)) && a_is_palindrome(pm.n2a_binary(n))) {
    double_base_palindromes.push(n);
  }
}

console.log(pm.array_sum(double_base_palindromes));
