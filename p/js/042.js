/* jshint node: true */

"use strict";

var pm = require('./pm');

var words = pm.readfile('042.dat').split(',');

console.log(words.map(pm.word_sum).filter(pm.is_triangle_number).length);