/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const amount = 200;
const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const cc = (amount, i) => {
  const coin = coins[i];
  if (coin === 1 || amount === 0) return 1;
  var sum = 0;
  for (var j = 0; j <= Math.floor(amount / coin); j++) {
    sum += cc(amount - j * coin, i - 1);
  }
  return sum;
}
console.log(cc(amount, coins.length - 1));
