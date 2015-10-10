/* jshint node: true */
/*jslint indent: 2 */
/*jslint white: true */

"use strict";

function abundant_numbers(limit) {
  var ans = [];
  for (var n = 1; n <= limit; n++) {
    if (sum_of_proper_divisors(n) > n) {
      ans.push(n);
    }
  }
  return ans;
}

function array_sum(a) {
  return (a.reduce(function(m, e) { return m + e; }, 0));
}

function proper_divisors(n) {
  var pds = [1];
  for (var d = 2; d <= Math.sqrt(n); d++) {
    if (n % d === 0) {
      pds.push(d);
      if (n / d !== d) {
        pds.push(n / d);
      }
    }
  }
  return pds;
}

function sum_of_proper_divisors(n) {
  return array_sum(proper_divisors(n));
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
