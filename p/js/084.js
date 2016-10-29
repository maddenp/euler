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
const histogram = {0: 1};
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

const draw = deck => {
  const card = deck.pop();
  deck.unshift(card);
  return card;
};

const move = () => {
  const roll1 = roll(die);
  const roll2 = roll(die);
  doubles = roll1 === roll2 ? doubles + 1 : 0;
  if (doubles === 3) {
    doubles = 0;
    return jail();
  }
  var next = (square + roll1 + roll2) % 40;
  if (next === g2j) {
    return jail();
  }
  if (cc_squares[next]) {
    var card = draw(cc);
    return card ? card() : next;
  }
  if (ch_squares[next]) {
    var card = draw(cc);
    return card ? card() : next;
  }
  return next;
};

cc = pm.array_shuffle(cc.concat([go, jail]));
ch = pm.array_shuffle(ch.concat([go, jail, c1, e3, h2, r1, nextr, nextr, nextu, back3]));

for (var i = 1; i < 40; i++) histogram[i] = 0;

for (var i = 0; i < limit; i++) {
  square = move(square);
  histogram[square] += 1;
}

Object.keys(histogram).forEach(key => histogram[key] = (histogram[key]/limit*100).toFixed(2));
console.log(histogram);
