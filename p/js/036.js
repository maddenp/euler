/* jshint node: true */

"use strict";

var pm = require('./pm');

function is_palindrome(a) {
  for (var i = 0; i < Math.floor(a.length / 2); i++) {
    if (a[i] !== a[a.length - (i + 1)]) return false;
  }
  return true;
}

function add_two(a) {
  pm.array_inc(a);
  pm.array_inc(a);
}

var a = [1];
var double_base_palindromes = [];

for (var n = 1; n < 1000000; n += 2) {
  if (is_palindrome(a) && is_palindrome(pm.n2a_binary(n))) {
    double_base_palindromes.push(n);
  }
  add_two(a);
}

console.log(pm.array_sum(double_base_palindromes));
