/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

const grids = [];

var i = 0;
var grid = [];

require('fs').readFileSync('096.dat', 'utf8').split('\n').forEach(line => {
  if (i !== 0) {
    grid.push(line.split(''));
    if (i === 9) {
      grids.push(grid);
      grid = [];
    }
  }
  i = (i + 1) % 10;
});

grid = grids[0];

var work = []
for (var r = 0; r < 9; r++) {
  work[r] = [];
  for (var c = 0; c < 9; c++) {
    work[r].push([1,2,3,4,5,6,7,8,9]);
  }
}

console.log(grid);
