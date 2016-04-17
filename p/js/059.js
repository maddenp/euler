/* jshint node: true */
/* jshint esversion: 6 */
/* jshint loopfunc: true */

"use strict";

const pm = require('./pm');

const lc_lo = 97;
const lc_hi = 122;
const uc_lo = 65;
const uc_hi = 90;
const printable_lo = 32;
const printable_hi = 126;
const vowel_freq_english = {a: 0.08167, e: 0.12702, i: 0.06966, o: 0.07507, u: 0.02758};

var count = [];
var min_error = Number.MAX_SAFE_INTEGER;
var min_plaintext;

var ciphertext = pm.readfile('059.dat');
ciphertext = ciphertext.split(',');
ciphertext = ciphertext.slice(0, ciphertext.length);
ciphertext = ciphertext.map(Number);

for (var a1 = lc_lo; a1 <= lc_hi; a1++) {
  for (var a2 = lc_lo; a2 <= lc_hi; a2++) {
    keys: for (var a3 = lc_lo; a3 <= lc_hi; a3++) {
      var key = [a1, a2, a3];
      var sum = 0;
      for (var i = printable_lo; i <= printable_hi; i++) {
        count[i] = 0;
      }
      var plaintext = [];
      for (var i = 0; i < ciphertext.length; i++) {
        var c = ciphertext[i] ^ key[i % key.length];
        if (c < printable_lo || c > printable_hi) continue keys;
        plaintext[i] = c;
        if ((c >= uc_lo && c <= uc_hi) || (c >= lc_lo && c <= lc_hi)) {
          ++sum;
          ++count[c];
        }
      }
      var p = count.map(n => n / sum);
      var vowel_freq = {
        a: p[65] + p[97],
        e: p[69] + p[101],
        i: p[73] + p[105],
        o: p[79] + p [111],
        u: p[85] + p[117]
      };
      var error = Object.keys(vowel_freq).reduce((m, e) => (
        m + Math.pow(vowel_freq_english[e] - vowel_freq[e], 2)
      ), 0);
      if (error < min_error) {
        min_error = error;
        min_plaintext = plaintext;
      }
    }
  }
}

console.log(pm.array_sum(min_plaintext));
