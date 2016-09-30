/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

/*
 * This is a generalization of problem 31.
 * 
 * In function cc(), if 'amount' is 0, it is because the highest prime from the
 * calling frame reduced it to 0 via successive subtraction, meaning that the
 * amount was divisible by that prime, meaning that there was one way to write
 * the amount as a sum of that prime alone.
 *
 * If the current prime is the lowest one (i.e. 2), then either (a) the current
 * amount can be written as a sum of that prime alone, in which case there is
 * one way; or (b) it cannot, in which case there are zero ways.
 *
 * If the current-highest prime is greater than the amount, then that prime can
 * not be used in a sum, so reject it and try again with the next-highest prime.
 *
 * Otherwise, the ways to write the amount as a sum of the remaining primes is
 * the number of ways to write it without the current-highest prime, plus the
 * number of ways to write an amount reduced by the current-highest prime with
 * all the remaining primes.
 *
 * Note that cc() could be memoized for performance. But it's not enough to
 * record the ways for some 'n', as the ways depend on the number of primes
 * used. So, e.g. the ways to write 10 with [2, 3, 5] is different than the
 * ways to write 10 with [2, 3, 5, 7]. But a 2D memo array can be used, with
 * e.g. '7' representing the primes set [2, 3, 5, 7], '5' for [2, 3, 5], etc.
 * 
 */

const cc = (amount, i) => {
  if (amount === 0) return 1;
  if (primes[i] === primes[0]) {
    return amount % primes[0] === 0 ? 1 : 0;
  }
  if (amount < primes[i]) return cc(amount, i - 1);
  return cc(amount, i - 1) + cc(amount - primes[i], i);
}

const primes = pm.primes(1, 61); // experimentally derived range

var n = 1;

while (true) {
  var ways = cc(n, primes.length - 1);
  if (ways > 5000) {
    console.log(n);
    break;
  }
  n++;
}
