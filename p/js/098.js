/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const lengths = new Set();
const pairs = [];
const words = {};

var lenmin = Number.MAX_SAFE_INTEGER;
var lenmax = 0;

const check = (pair, squares) => {

  // Select the first member of the pair and loop over the known squares with
  // the same number of digits as letters in this word. Create a map from
  // letters to numbers that could have been used to transform this word into
  // the square in question. Then, apply that map the other pair and see if it
  // creates another square. If so, record the max of the two squares. Return
  // the largest square that was part of such a pair-of-words-map-to-squares
  // scheme.

  var max = 0;
  var len = pair[0].letters.length;
  Object.keys(squares[len]).forEach(square => {
    var uniques = Array.from(new Set(pm.n2a(square)));
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

// Read in words and record, along with them, array and sorted array versions.

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

// Loop over words and, for each, find palindromes. Record palindrome pairs.
// Mark members of the pair as seen so that duplicate (reversed) pairs are not
// recorded. Track the lengths of pair members.

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
}

// Collect a list of squares of appropriate size to test later for membership
// against.

lenmax = pm.array_max(Array.from(lengths));
const maxsquare = Math.pow(10, lenmax) - 1;
const squares = {};
for (var n = 1; n <= lenmax; n++) squares[n] = {};
for (var n = 1; true; n++) {
  var square = n * n;
  if (square > maxsquare) break;
  squares[pm.ndigits(square)][square] = true;
}

// Loop over pairs and potentially update 'max' with a new max-square value.

var max = 0;
pairs.forEach(pair => max = Math.max(max, check(pair, squares)));

console.log(max);
