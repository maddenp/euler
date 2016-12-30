/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var before = 0;
var after = 0;

require('fs').readFileSync('089.dat', 'utf8').split('\n').forEach(rn => {
  before += rn.length;
  ['IVX', 'XLC', 'CDM'].forEach(x => {
    var s = x[0], m = x[1], l = x[2];
    rn = rn.replace(new RegExp(`${s}{4}`), `${s}${m}`);
    rn = rn.replace(new RegExp(`${m}${s}${m}`), `${s}${l}`);
    rn = rn.replace(new RegExp(`${m}${s}{4}`), `${s}${l}`);
  });
  after += rn.length;
});

console.log(before - after);
