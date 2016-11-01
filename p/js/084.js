/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

// Awful problem. So stupid.

const pm = require('./pm');

const next = a => () => {
  var n = square;
  while (++n) if (a.indexOf(n = n % 40) !== -1) return n;
};

const a2g = () => 0;
const back3 = () => (square + 40 - 3) % 40;
const c1 = () => 11;
const cc_squares = {2: true, 17: true, 33: true};
const ch_squares = {7: true, 22: true, 36: true};
const die = 4;
const die_max = Math.floor(die);
const die_min = Math.ceil(1);
const die_scale = die_max - die_min + 1;
const e3 = () => 24;
const g2j = {30: true};
const h2 = () => 39;
const histogram = {0: 1};
const jail = () => 10;
const limit = 1000000;
const nextr = next([5, 15, 25, 35]);
const nextu = next([12, 28]);
const r1 = () => 5;
const roll = () => Math.floor(Math.random() * die_scale) + die_min;

const cc = pm.array_shuffle(Array(14).concat([a2g, jail]));
const ch = pm.array_shuffle(Array(6).concat([a2g, jail, c1, e3, h2, r1, nextr, nextr, nextu, back3]));

var doubles = 0;
var square = 0;

const draw = deck => {
  const card = deck.pop();
  deck.unshift(card);
  return card;
};

// The doubles handling assumes that you don't count the square first visited
// when you roll doubles, but immeidately roll again and only count the square
// you visit when breaking out of the run of doubles -- which may be jail.

const move = () => {
  var card;
  const roll1 = roll(die);
  const roll2 = roll(die);
  if (roll1 === roll2) {
    doubles++;
    return move();
  } else {
    doubles = 0;
  }
  if (doubles > 2) {
    doubles = 0;
    return jail();
  }
  var next = (square + roll1 + roll2) % 40;
  if (g2j[next]) {
    next = jail();
  }
  if (ch_squares[next]) {
    card = draw(ch);
    if (card) next = card();
  }
  if (cc_squares[next]) {
    card = draw(cc);
    if (card) next = card();
  }
  return next;
};

for (var i = 1; i < 40; i++) histogram[i] = 0;

for (var i = 0; i < limit; i++) {
  square = move(square);
  histogram[square] += 1;
}

const f = (m, e) => histogram[e] > histogram[m] ? e : m;

var s = '';
for (var i = 0; i < 3; i++) {
  var max_key = Object.keys(histogram).reduce(f);
  if (max_key < 10) s += '0';
  s += max_key;
  histogram[max_key] = 0;
}
console.log(s);
