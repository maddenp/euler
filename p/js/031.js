/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const amount = 200;
const coins = [1, 2, 5, 10, 20, 50, 100, 200];
const memo = [];

for (var i = 0; i <= amount; i++) {
  memo[i] = [];
  for (var j = 0; j < coins.length; j++) {
    memo[i][j] = 0;
  }
}

const cc = (a, i) => {
  if (i <= 0) return 1;
  var b = a;
  if (memo[b][i] > 0) return memo[b][i];
  for (var x = 0; a >=0; a -= coins[i]) x += cc(a, i - 1);
  memo[b][i] = x;
  return x;
};

console.log(cc(amount, coins.length - 1));
