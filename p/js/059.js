/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var ciphertext = pm.readfile('059.dat');
ciphertext = ciphertext.split(',');
ciphertext = ciphertext.slice(0, ciphertext.length);
ciphertext = ciphertext.map(Number);

var plaintext = [];

for (var a1 = 97; a1 <= 122; a1++) {
  for (var a2 = 97; a2 <= 122; a2++) {
    keys: for (var a3 = 97; a3 <= 122; a3++) {
      var key = [a1, a2, a3];
      for (var i = 0; i < ciphertext.length; i++) {
        var c = ciphertext[i] ^ key[i % key.length];
        if (c < 32 || c > 126) continue keys;
        plaintext[i] = c;
      }
//       console.log('--- ' + key);
//       console.log(plaintext.reduce((m, e) => m + String.fromCharCode(e), ''));
      if (a1 === 103 && a2 === 111 && a3 === 100) {
        console.log(pm.array_sum(plaintext));
      }
    }
  }
}
