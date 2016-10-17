/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

// const pm = require('./pm');

var matrix = require('fs').readFileSync('081.dat', 'utf8').trim().split('\n').map(x => x.split(','));
