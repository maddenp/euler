/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const cc = {2: true, 17: true, 33: true};
const ch = {7: true, 22: true, 36: true};
const die = 6;
const die_max = Math.floor(die);
const die_min = Math.ceil(1);
const die_scale = die_max - die_min + 1
const g2j = 30;
const jail = 10;

const roll = () => Math.floor(Math.random() * die_scale) + die_min;

const move = () => {
  const roll1 = roll(die);
  const roll2 = roll(die);
//   if (roll1 === roll2) doubles++;
//   if (doubles === 3) {
//     console.log('triple doubles');
//     next = jail;
//     doubles = 0;
//   }
  var next = (square + roll1 + roll2) % 40;
//   if (next === g2j) {
//     console.log('g2j');
//     next = jail;
//   }
  return next;
};

const histogram = [];
for (var i = 0; i < 40; i++) histogram[i] = 0;
histogram[0] = 1;

var doubles = 0;
var square = 0;

const limit = 1000000;

for (var i = 0; i < limit; i++) {
  square = move(square);
  histogram[square]++;
}

console.log(histogram.map(x => x/limit));
