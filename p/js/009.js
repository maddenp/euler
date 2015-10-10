/* jshint node: true */

"use strict";

var a, b, c;

main: for (c = 3; c < 998; c++) {
  for (b = 2; b < c; b++) {
    for (a = 1; a < b; a++) {
      if (a * a + b * b === c * c && a + b + c === 1000 ) {
        console.log(a * b * c);
        break main;
      }
    }
  }
}
