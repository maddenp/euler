/* jshint node: true */

"use strict";

function sum_of_proper_divisors(n) {
  var sopd = 1;
  for (var d = 2; d <= Math.sqrt(n); d++) {
    if (n % d === 0) {
      sopd += d;
      if (n/d !== d) sopd += n/d;
    }
  }
  return sopd;
}

for (var n = 1, sum = 0; n < 10000; n++) {
  var s = sum_of_proper_divisors(n);
  var m = sum_of_proper_divisors(s);
  if (m === n && s !== n) {
    sum += n;
  }
}

console.log(sum);
