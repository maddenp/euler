/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 10000000;
const seen = {};

var count = 0;

for (var n = 2; n < limit; n++) {
  var m = n;
  var q = [];
  while (true) {
    var a = pm.n2a(m).map(d => d * d);
    m = pm.array_sum(a);
    if (seen[m] || m === 1 || m === 89) {
      seen[n] = seen[m] || m;
      if (seen[n] === 89) count++;
      q.forEach(x => seen[x] = seen[n]);
      break;
    }
    q.push(m);
  }
}

console.log(count);
