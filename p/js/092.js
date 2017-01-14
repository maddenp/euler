/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const a = [];
const f = [0, 1, 2, 3, 4, 5, 6 ,7].reduce((m, e) => (m[e] = pm.factorial(e), m), {});

const unique_permutations_of = a => {
  var c = 1;
  var t = 1;
  for (var i = 1; i < a.length; i++) {
    if (a[i] !== a[i - 1]) {
      t *= f[c];
      c = 0;
    }
    c++;
  }
  return f[7] / (t * f[c]);
};

var count = 0;

for (a[0] = 0; a[0] <= 9; a[0]++) {
  for (a[1] = 0; a[1] <= a[0]; a[1]++) {
    for (a[2] = 0; a[2] <= a[1]; a[2]++) {
      for (a[3] = 0; a[3] <= a[2]; a[3]++) {
        for (a[4] = 0; a[4] <= a[3]; a[4]++) {
          for (a[5] = 0; a[5] <= a[4]; a[5]++) {
            for (a[6] = 0; a[6] <= a[5]; a[6]++) {
              var b = a.slice();
              while (true) {
                var n = pm.array_sum(b.map(d => d * d));
                if (n === 89) count += unique_permutations_of(a);
                if (n === 89 || n < 2) break;
                b = pm.n2a(n);
              }
            }
          }
        }
      }
    }
  }
}

console.log(count);
