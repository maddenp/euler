/* jshint node: true */

"use strict";

var pm = require('./pm.js');

function abundant_numbers(limit) {
  var ans = [];
  for (var n = 1; n <= limit; n++) {
    if (pm.sum_of_proper_divisors(n) > n) {
      ans.push(n);
    }
  }
  return ans;
}

var limit = 28123;
var ans = abundant_numbers(limit);

var sieve = [];
for (var i = 0; i < ans.length; i++) {
  for (var j = i; j < ans.length; j++) {
    var sum_of_ans = ans[i] + ans[j];
    if (sum_of_ans > limit) break;
    sieve[sum_of_ans] = true;
  }
}

var sum = 0;
for (var i = 1; i <= limit; i++) {
  if (!sieve[i]) {
    sum += i;
  }
}
console.log(sum);
