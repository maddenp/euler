/* jshint node: true */

"use strict";

/*
  The nth triangle number is the sum of the first n natural numbers, a sum
  given by the formula n * (n + 1) / 2. As pointed out by bartmeijer in the
  012 posts: "As n and n+1 have no factors in common (except for the number
  1) one can multiply the factor counts in n/2 and n+1, or n and (n+1)/2 as
  the case may be, to arrive at the factor count of the nth triangle number.
  This makes things a lot faster."
*/

function ndivisors(n, divisors) {
  var sum = 0;
  for (var i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) sum += 2;
    if (i * i === n) --sum;
  }
  return sum;
}

var d, divisors = [], n = 1;

while (true) {
  if (n % 2 === 0) {
    d = ndivisors(n / 2, divisors) * ndivisors(n + 1, divisors);
  } else {
    d = ndivisors(n, divisors) * ndivisors((n + 1) / 2, divisors);
  }
  if (d > 500) {
    console.log((n * (n + 1)) / 2);
    break;
  }
  ++n;
}
