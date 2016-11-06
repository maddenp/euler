/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const f = M => {
  var count = 0;
  for (var x = 1; x <= M; x++) {
    for (var y = x; y <= M; y++) {
      for (var z = y; z <= M; z++) {
        var minlen = Math.sqrt((x + y) * (x + y) + z * z);
        if (Math.floor(minlen) === minlen) ++count;
      }
    }
  }
  return count;
};

const M1 = 1817;
const M2 = M1 + 1;
const count1 = f(M1);
const count2 = f(M2);

const limit = 1000000;
if (count1 < limit && count2 >= limit) console.log(M2);
