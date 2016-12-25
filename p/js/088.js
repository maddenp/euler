/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const f = a => {
  const candidates = [];
  const queue = [];
//   console.log('a',JSON.stringify(a));
  for (let n of new Set(a)) {
    let b = a.slice();
    b[b.indexOf(n)]++;
    let sum = pm.array_sum(b);
    let prod = pm.array_product(b);
    let diff = sum - prod;
//     console.log(b, sum, prod, diff);
    if (diff === 0) {
//       console.log(`Found: ${JSON.stringify(b)}`);
      candidates.push(sum);
    } else if (diff < 0) {
//       console.log(`Too big: ${JSON.stringify(b)}, ${sum} - ${prod} = ${diff}`);
      continue;
    } else {
//       console.log(`Will consider: ${JSON.stringify(b)}`);
      queue.push(b);
    }
  }
  if (candidates.length === 0) {
    queue.forEach(b => {
//       console.log('Checking', JSON.stringify(b));
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
//   console.log('---',a);
  var x = f(a);
//   console.log('@@@',x);
  mpsns.add(x);
}

// console.log(mpsns);

var sum = 0;
for (let n of mpsns) sum += n;
console.log(sum);
