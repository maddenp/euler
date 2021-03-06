/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const MSI = Number.MAX_SAFE_INTEGER;

// const dist = [[131, 673, 234, 103,  18],
//               [201,  96, 342, 965, 150],
//               [630, 803, 746, 422, 111],
//               [537, 699, 497, 121, 956],
//               [805, 732, 524,  37, 331]];

const dist = require('fs').readFileSync('081.dat', 'utf8').trim().split('\n').map(x => x.split(',').map(s => parseInt(s)));

for (var row = 0; row < dist.length; row++) {
  for (var col = 0; col < dist[0].length; col++) {
    var U = row > 0 ? dist[row - 1][col] : MSI;
    var L = col > 0 ? dist[row][col - 1] : MSI;
    if (U < MSI || L < MSI) dist[row][col] += Math.min(U, L);
  }
}

console.log(dist[dist.length - 1][dist.length - 1]);
