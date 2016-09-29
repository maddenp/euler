/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

// See problem 77 for a description of the algorithm.

const amount = 200;
const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const cc = (amount, i) => {
  if (amount === 0 || coins[i] === coins[0]) return 1;
  if (amount < coins[i]) return cc(amount, i - 1);
  return cc(amount, i - 1) + cc(amount - coins[i], i);
}

console.log(cc(amount, coins.length - 1));
