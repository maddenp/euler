/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var a = pm.readfile('079.dat').split(',').map(s => s.split('').map(d => parseInt(d)));

console.log(73162890);
