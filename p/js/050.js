/* jshint node: true */

"use strict";

var pm = require('./pm');

var limit = 1000000, max_head = -1, max_tail = -1, primes = pm.primes(1, limit);

for (var goal = primes.length - 1; goal >=0; goal--) {
  var head = goal - 1;
  var sum = primes[head];
  for (var tail = head - 1; tail >= 0; tail--) {
    if (sum + primes[tail] > primes[goal]) {
      sum = sum - primes[head] + primes[tail];
      head--;
    } else {
      sum += primes[tail];
    }
    if (sum === primes[goal]) {
      if (head - tail > max_head - max_tail) {
        max_head = head;
        max_tail = tail;
      }
    }
  }
}

console.log(pm.array_sum(primes.slice(max_tail, max_head + 1)));
