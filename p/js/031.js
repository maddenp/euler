/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var count = 0;

for (var p200 = 0; p200 <= 1; p200++) {
  var r200 = 200 - p200 * 200;
  for (var p100 = 0; p100 <= Math.floor(r200/100); p100++) {
    var r100 = r200 - p100 * 100;
    for (var p50 = 0; p50 <= Math.floor(r100/50); p50++) {
      var r50 = r100 - p50 * 50;
      for (var p20 = 0; p20 <= Math.floor(r50/20); p20++) {
        var r20 = r50 - p20 * 20;
        for (var p10 = 0; p10 <= Math.floor(r20/10); p10++) {
          var r10 = r20 - p10 * 10;
          for (var p5 = 0; p5 <= Math.floor(r10/5); p5++) {
            var r5 = r10 - p5 * 5;
            for (var p2 = 0; p2 <= Math.floor(r5/2); p2++) {
              var r2 = r5 - p2 * 2;
              for (var p1 = 0; p1 <= Math.floor(r2/1); p1++) {
                if (p200 * 200 + p100 * 100 + p50 * 50 + p20 * 20 + p10 * 10 + p5 * 5 + p2 * 2 + p1 * 1 === 200) ++count;
              }
            }
          }
        }
      }
    }
  }
}

console.log(count);
