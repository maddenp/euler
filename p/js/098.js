/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

// const words = require('fs').readFileSync('098.dat', 'utf8').split(',').reduce((m, e) => (m[e.replace(/"/g, '')] = true, m), {});
// 
// const anagrams = (word) => {
//   const anagrams = [];
//   const collect = (perm) => {
//     const w = perm.join('');
//     if (words[w] && w !== word) anagrams.push(w);
//   };
//   pm.permutations_map(word.split(''), collect);
//   return anagrams;
// };
// 
// Object.keys(words).forEach(word => {
//   console.log(word, anagrams(word));
// });

// console.log(pm.are_anagrams('race', 'care'));
// console.log(pm.are_anagrams(['r','a','c','e'],['c','a','r','e']));
// console.log(pm.are_anagrams('race', 'carx'));
// console.log(pm.are_anagrams(['r','a','c','e'],['c','a','r','x']));

const words = {};

var lenmin = Number.MAX_SAFE_INTEGER;
var lenmax = 0;

require('fs').readFileSync('098.dat', 'utf8').split(',').forEach(s => {
  var word = s.replace(/"/g, '');
  var len = word.length;
  if (len < lenmin) lenmin = len;
  if (len > lenmax) lenmax = len;
  if (!words[len]) words[len] = [];
  words[len].push({s: word, a: word.split('')});
});

for (var n = lenmin; n <= lenmax; n++) {
  console.log(n);
  words[n].forEach(w => {
    var anagrams = words[n].filter(x => x !== w && pm.are_anagrams(w.a, x.a));
    if (anagrams.length !== 0) console.log(n, w.s, anagrams.map(x => x.s));
  });
};
