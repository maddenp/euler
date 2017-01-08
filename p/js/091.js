/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const limit = 3;

var total = 0;

for (var x = 1; x <= limit; x++) {
  for (var y = x; y <= limit; y++) {
    if (x === y) {
      var count = 3;
      console.log(`S(${x},${y}) count = ${count}`);
    } else {
      var count = 6;
      console.log(`R(${x},${y}) count = ${count}`);
    }
    for (var i = 1; i <= y / 2; i++) {
      var j = y - i;
      console.log(`i=${i} j=${j}`);
      var a = Math.sqrt(x * x + i * i);
      var b = Math.sqrt(x * x + j * j);
      var c = y;
      var inner = 0;
      if (Math.sqrt(a * a + b * b) === c) {
        console.log(`a=sqrt(${x * x + i * i}) b=sqrt(${x * x + j * j}) c=${c}`);
        if (i === y / 2) {
          inner = 1;
          console.log(`inner = ${inner}`);
        } else {
          inner = 2;
          console.log(`inner = ${inner}`);
        }
      }
      if (x === y) {
        count += inner;
        console.log(`count + ${inner} = ${count}`);
      } else {
        count += (inner * 2);
        console.log(`count + ${inner} * 2 = ${count}`);
      }
    }
    console.log(`count: ${count}`);
    total += count;
  }
}

console.log(total);
