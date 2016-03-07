/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var pos = 1;
var s = pm.readfile('022.dat');
var names_positions = s.split(',').sort().map(function (e) { return {'n': e, 'p': pos++}; });

console.log(names_positions.reduce(function (sum, name_pos) {
  return sum + pm.word_sum(name_pos.n) * name_pos.p;
}, 0));
