/* jshint node: true */

"use strict";

var i, j, sum = 0, triangle_number = 1;

for (i = 2; sum <= 250; i++) {
  sum = 0;
  var increment = triangle_number % 2 === 0 ? 1 : 2;
  for (j = 1; j <= Math.sqrt(triangle_number); j += increment) {
    if (triangle_number % j === 0) {
      ++sum;
    }
  }
  triangle_number += i;
}

console.log(triangle_number - i + 1);
