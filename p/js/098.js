/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const words = {};

var lenmin = Number.MAX_SAFE_INTEGER;
var lenmax = 0;

require('fs').readFileSync('098.dat', 'utf8').split(',').forEach(s => {
  var word = s.replace(/"/g, '');
  var len = word.length;
  if (len < lenmin) lenmin = len;
  if (len > lenmax) lenmax = len;
  if (!words[len]) words[len] = [];
  var a = word.split('').sort();
  var t = new Set(a);
  words[len].push({s: word, a, t, k: Array.from(t)});
});

const anagramsp = (a1, a2) => {
  for (var i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};

const getmaps = (x) => {
  const a = [];
  const maps = [];
  for (var i = 0; i < x.t.size; i++) a.push(0);
  for (var i = 0; i < Math.pow(10, x.t.size); i++) {
    var t = new Set(a);
    if (t.size === a.length) {
      var keys = Array.from(x.t);
      var map = {};
      for (var j = 0; j < keys.length; j++) map[keys[j]] = a[j];
      var b = x.s.split('').reduce((m, e) => `${m}${map[e]}`, '');
      var bi = parseInt(b);
      if (b[0] !== '0' && pm.is_square(bi)) {
        maps.push(map);
      }
    }
    pm.array_inc(a);
  }
  return maps;
};

var max = 0;

for (var n = lenmin; n <= lenmax; n++) {
  words[n].forEach(w => {
    var anagrams = words[n].filter(x => x !== w && anagramsp(w.a, x.a));
    if (anagrams.length !== 0) {
      var maps = getmaps(w);
      maps.forEach(map => {
        var a = w.s.split('').reduce((m, e) => `${m}${map[e]}`, '');
        var ai = parseInt(a);
        anagrams.forEach(x => {
          var b = x.s.split('').reduce((m, e) => `${m}${map[e]}`, '');
          var bi = parseInt(b);
          if (b[0] !== '0' && pm.is_square(bi)) {
            var ci = Math.max(ai, bi);
            if (ci > max) {
              max = ci;
//               console.log(max);
            }
          }
        });
      });
    }
  });
};

console.log(max);
