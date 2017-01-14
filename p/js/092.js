/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 10000000;
const seen = {};

var count = 0;

for (var n = 2; n < limit; n++) {
  if (seen[n]) continue;
  var q = [n];
  var m = n;
  while (true) {
    m = pm.array_sum(pm.n2a(m).map(d => d * d));
    if (seen[m] || m === 1 || m === 89) {
      var s = seen[m] || m;
      count += (s === 89 ? 1 : 0) * q.length;
      q.forEach(x => seen[x] = s);
      break;
    }
    q.push(m);
  }
}

console.log(count);
