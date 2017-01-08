/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const limit = 9;

var total = 0;

for (var x = 1; x <= limit; x++) {
  for (var y = x; y <= limit; y++) {
    total += x === y ? 3 : 6;
    for (var i = 1; i <= y / 2; i++) {
      var j = y - i;
      var asq = x * x + i * i;
      var bsq = x * x + j * j;
      var csq = y * y;
      if (asq + bsq !== csq) continue;
      var inner = i === y / 2 ? 1 : 2;
      total += x === y ? inner : inner * 2;
    }
  }
}

console.log(total);
