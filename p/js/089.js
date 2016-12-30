/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var before = 0;
var after = 0;

require('fs').readFileSync('089.dat', 'utf8').split('\n').forEach(s => {
  before += s.length;
  [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M']].forEach(x => {
    s = s.replace(new RegExp(`${x[0]}{4}`), `${x[0]}${x[1]}`);
    s = s.replace(new RegExp(`${x[1]}${x[0]}${x[1]}`), `${x[0]}${x[2]}`);
    s = s.replace(new RegExp(`${x[1]}${x[0]}{4}`), `${x[0]}${x[2]}`);
  });
  after += s.length;
});

console.log(before - after);
