/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

/*
 * A simplified, n e Z, 0 < n < 100 version of:
 *
 * https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Digit-by-digit_calculation
 *
 */

const sqrt = (n, decimal_places) => {
  
  const f = (p, x) => pm.array_times_int(pm.array_add(pm.array_times_int(p, 20), pm.n2a(x)), x);

  var c = pm.n2a(n);
  var p = [0];
  var r = [0];
  var s = [];

  for (var i = 0; i <= decimal_places; i++) {
    for (var x = 0; true; x++) {
      if (pm.array_comp(f(p, x + 1), c) > 0) break;
    }
    var y = f(p, x);
    c = pm.array_times_int(pm.array_sub(c, y), 100);
    p = pm.array_add(pm.array_times_int(p, 10), pm.n2a(x));
    r = pm.array_sub(c, y);
    if (x > 9) {
      s[s.length - 1]++;
      x %= 10;
    }
    s.push(x);
  }

  return s;

};

var total = 0;

for (var n = 1; n <= 100; n++) {
  var x = Math.sqrt(n);
  if (Math.floor(x) === x) continue;
  total += pm.array_sum(sqrt(n, 99));
}

console.log(total);

// console.log(pm.array_sum('1414213562373095048801688724209698078569671875376948073176679737990732478462107038850387534327641572'.split('').map(x => parseInt(x)))); //  2 => 475
// console.log(pm.array_sum('1732050807568877293527446341505872366942805253810380628055806979451933016908800037081146186757248575'.split('').map(x => parseInt(x)))); //  3 => 441
// console.log(pm.array_sum('3162277660168379331998893544432718533719555139325216826857504852792594438639238221344248108379300295'.split('').map(x => parseInt(x)))); // 10 => 459
// console.log(pm.array_sum('9949874371066199547344798210012060051781265636768060791176046438349453927827131540126530197384871952'.split('').map(x => parseInt(x)))); // 99 => 446
