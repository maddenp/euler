/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const amount = 200;
const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const cc = (a, i) => {
  if (i <= 0) return 1;
  for (var x = 0; a >=0; a -= coins[i]) x += cc(a, i - 1);
  return x;
};

console.log(cc(amount, coins.length - 1));
