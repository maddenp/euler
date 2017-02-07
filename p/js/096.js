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
