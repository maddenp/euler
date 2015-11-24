/* jshint node: true */

"use strict";

var pm = require('./pm.js');

var pos = 1;
var s = pm.readfile('022.dat');
var names_positions = s.split(',').sort().map(function(e) { return {'n': e, 'p': pos++}; });

function name_sum(name) {
  return name.split('').reduce(function(sum, chr) {
    return sum + chr.charCodeAt(0) - 64;
  }, 0);
}

console.log(names_positions.reduce(function(sum, name_pos) {
  return sum + name_sum(name_pos.n) * name_pos.p;
}, 0));
