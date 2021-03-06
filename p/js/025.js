/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var fib_new, fib_prev, fib_this, i;

for (fib_prev = [1], fib_this = [1], i = 2; fib_this.length < 1000; i++) {
  fib_new = pm.array_add(fib_prev, fib_this);
  fib_prev = fib_this;
  fib_this = fib_new;
}

console.log(i);
