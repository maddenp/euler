/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const limit = 1000000;
const m0 = 1817;
const m1 = m0 + 1;

var c = 0;

for (var x = 1; x <= m0; x++) {
  for (var y = x; y <= m0; y++) {
    for (var z = y; z <= m0; z++) {
      var len = Math.sqrt((x + y) * (x + y) + z * z);
      if (Math.floor(len) === len) c += 1;
    }
  }
}

var c0 = c;

for (var x = 1; x <= m1; x++) {
  for (var y = x; y <= m1; y++) {
    var len = Math.sqrt((x + y) * (x + y) + m1 * m1);
    if (Math.floor(len) === len) c += 1;
  }
}

if (c0 < limit && c >= limit) {
  console.log(m1);
}
