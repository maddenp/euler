/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const exclude = T => T[0] + T[1] + T[2] > 1500000;
const trips = [];
const accept = (T) => trips.push(T);

pm.pythagorean_triples(exclude, accept);
var counts = trips.reduce((m, e) => (m[pm.array_sum(e)] = (m[pm.array_sum(e)] || 0) + 1, m), {});
var sum = Object.keys(counts).reduce((m, e) => m + (counts[e] === 1 ? 1 : 0), 0);

console.log(sum);
