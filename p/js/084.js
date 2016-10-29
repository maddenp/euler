/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const next = a => () => {
  var n = square;
  while (++n) if (a.indexOf(n = n % 40) !== -1) return n;
};

const back3 = () => (square + 40 - 3) % 40;
const c1 = () => 11;
const cc_squares = {2: true, 17: true, 33: true};
const ch_squares = {7: true, 22: true, 36: true};
const die = 6;
const die_max = Math.floor(die);
const die_min = Math.ceil(1);
const die_scale = die_max - die_min + 1
const e3 = () => 24;
const g2j = 30;
const go = () => 0;
const h2 = () => 39;
const histogram = [1];
const jail = () => 10;
const limit = 1000000;
const nextr = next([5, 15, 25, 35]);
const nextu = next([12, 28]);
const r1 = () => 5;
const roll = () => Math.floor(Math.random() * die_scale) + die_min;

var cc = Array(14);
var ch = Array(6);
var doubles = 0;
var square = 0;

const move = () => {
  const roll1 = roll(die);
  const roll2 = roll(die);
  if (roll1 === roll2) doubles++;
  if (doubles === 3) {
    doubles = 0;
    return jail();
  }
  var next = (square + roll1 + roll2) % 40;
  if (next === g2j) {
    return jail();
  }
  return next;
};

cc = pm.array_shuffle(cc.concat([go, jail]));
ch = pm.array_shuffle(ch.concat([c1, e3, go, h2, jail, r1, nextr, nextr, nextu, back3]));

for (var i = 1; i < 40; i++) histogram[i] = 0;

for (var i = 0; i < limit; i++) {
  square = move(square);
  histogram[square]++;
}

console.log(histogram.map(x => x/limit*100));
