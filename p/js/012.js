/* jshint node: true */

"use strict";

var sum = 0, triangle_number = 1;

for (var i = 2; sum <= 250; i++) {
  sum = 0;
  var step = triangle_number % 2 === 0 ? 1 : 2;
  for (var j = 1; j <= Math.sqrt(triangle_number); j += step) {
    if (triangle_number % j === 0) {
      ++sum;
    }
  }
  triangle_number += i;
}

console.log(triangle_number - i + 1);
