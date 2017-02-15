/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const lengths = new Set();
const pairs = [];
const words = {};

var lenmin = Number.MAX_SAFE_INTEGER;
var lenmax = 0;

const check = (pair) => {
  var max = 0;
  var len = pair[0].letters.length;
  Object.keys(squares[len]).forEach(square => {
    var uniques = Array.from(new Set(pm.n2a(square))); // do this once when creating squares?
    if (uniques.length === len) {
      var map = {};
      for (var i = 0; i < len; i++) {
        map[pair[0].letters[i]] = uniques[i];
      }
      var int = parseInt(pair[1].letters.reduce((m, e) => `${m}${map[e]}`, ''));
      if (squares[len][int]) max = Math.max(max, square, int);
    }
  });
  return max;
};

require('fs').readFileSync('098.dat', 'utf8').split(',').forEach(s => {
  var word = s.replace(/"/g, '');
  var len = word.length;
  if (len < lenmin) lenmin = len;
  if (len > lenmax) lenmax = len;
  if (!words[len]) words[len] = [];
  var letters = word.split('');
  var letters_sorted = letters.slice().sort();
  words[len].push({word, letters, letters_sorted});
});

for (var n = lenmin; n <= lenmax; n++) {
  for (let w of words[n]) {
    if (w.seen) continue;
    for (let x of words[n]) {
      if (x.word === w.word) continue;
      for (var i = 0; i < w.letters_sorted.length; i++) {
        if (x.letters_sorted[i] !== w.letters_sorted[i]) break;
      }
      if (i === w.letters_sorted.length) {
        pairs.push([w, x]);
        x.seen = true;
        lengths.add(w.letters_sorted.length);
      }
    }
  }
};

lenmax = pm.array_max(Array.from(lengths));
const maxsquare = Math.pow(10, lenmax) - 1;
const squares = {};
for (var n = 1; n <= lenmax; n++) squares[n] = {};
for (var n = 1; true; n++) {
  var square = n * n;
  if (square > maxsquare) break;
  squares[pm.ndigits(square)][square] = true;
}

var max = 0;
pairs.forEach(pair => max = Math.max(max, check(pair)));
console.log(max);
