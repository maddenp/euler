/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var words = pm.readfile('042.dat').split(',');

console.log(words.map(pm.word_sum).filter(pm.is_figurate_3).length);
