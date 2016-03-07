/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

function add_two(a) {
  pm.array_inc(a);
  pm.array_inc(a);
}

var a = [1];
var double_base_palindromes = [];

for (var n = 1; n < 1000000; n += 2) {
  if (pm.is_palindrome(a) && pm.is_palindrome(pm.n2a_binary(n))) {
    double_base_palindromes.push(n);
  }
  add_two(a);
}

console.log(pm.array_sum(double_base_palindromes));
