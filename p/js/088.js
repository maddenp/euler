/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const f = a => {
  const candidates = [];
  const queue = [];
  for (let n of new Set(a)) {
    let b = a.slice();
    b[b.indexOf(n)]++;
    let sum = pm.array_sum(b);
    let prod = pm.array_product(b);
    let diff = sum - prod;
    if (diff === 0) {
      candidates.push(sum);
    } else if (diff > 0) {
      queue.push(b);
    }
  }
  if (candidates.length === 0) {
    queue.forEach(b => {
      let candidate = f(b);
      if (candidate) candidates.push(candidate);
    });
  }
  return pm.array_min(candidates);
};

const limit = 12;
const mpsns = new Set([]); // minimal product-sum numbers

for (var k = 2; k <= limit; k++) {
  let a = [2];
  for (var i = 1; i < k; i++) a.push(1);
  var x = f(a);
  mpsns.add(x);
}

var sum = 0;
for (let n of mpsns) sum += n;
console.log(sum);
