/* jshint node: true */

"use strict";

var d, m, n;

/*
 *  Long version:
 *
 *  n = 2520;
 *  m = 2520;
 *  for (d = 11; d < 21; d++) {
 *    while (true) {
 *      if (n % d === 0) break;
 *      n += m;
 *    }
 *    m = n;
 *  }
 *
 */

// Short version:

for (n = m = 2520, d = 11; d < 21; d++, m = n) for (; n % d !== 0; n += m);

console.log(n);
