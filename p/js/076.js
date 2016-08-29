/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const limit = 5;

// const seen = {0: 1};
// 
// const p = (n) => {
//   console.log('doing n='+n);
//   if (seen[n]) {
//     console.log('seen: '+n);
//     return seen[n];
//   }
//   var sum = 0;
//   for (var k = 1; k <= n; k++) sum += p(n - k);
//   seen[n] = sum;
//   console.log('seen['+n+'] = '+sum);
//   return sum;
// };
// 
// console.log(p(5));

const gpn = n => {
  if (n % 2 === 0) {
    n = (n / 2) + 1;
    return ((1 - n) * (3 * (1 - n) - 1)) / 2;
  }
  n = (n + 1) / 2;
  return (3 * n * n - n) / 2;
};

for (var n = 1; n < 10; n++) {
  console.log(n, gpn(n));
}
