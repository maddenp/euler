/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const limit = 10000000;
const seen = {};

var count = 0;

for (var n = 2; n < limit; n++) {
  var m = n;
  var q = [m];
  while (true) {
    var a = pm.n2a(m);
    var b = a.map(d => d * d);
    m = pm.array_sum(b);
    if (seen[m] || m === 1 || m === 89) {
      seen[n] = seen[m] || m;
      q.forEach(x => seen[x] = seen[n]);
      if (seen[n] === 89) count++;
      break;
    }
    q.push[m];
  }
}

console.log(count);
