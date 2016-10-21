/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const MSI = Number.MAX_SAFE_INTEGER;

// const matrix = [[131, 673, 234, 103,  18],
//                 [201,  96, 342, 965, 150],
//                 [630, 803, 746, 422, 111],
//                 [537, 699, 497, 121, 956],
//                 [805, 732, 524,  37, 331]];

const matrix = require('fs').readFileSync('082.dat', 'utf8').trim().split('\n').map(x => x.split(',').map(s => parseInt(s)));

const costs = matrix.reduce((m, e) => (m.push(e[0]), m), []);

// Thanks to hbf Project Eueler forum, post at Sat, 30 Jun 2007, 01:01

for (var col = 1; col < matrix[0].length; col++) {
  var x = matrix.reduce((m, e) => (m.push(e[col]), m), []);
  for (var row = 0; row < matrix.length; row++) {
    costs[row] += matrix[row][col];
  }
  for (row = 1; row < matrix.length; row++) {
    costs[row] = Math.min(costs[row], x[row] + costs[row - 1]);
  }
  for (row = matrix.length - 2; row >= 0; row--) {
    costs[row] = Math.min(costs[row], x[row] + costs[row + 1]);
  }
}

console.log(Math.min.apply(null, costs));
