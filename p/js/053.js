/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var choose = (function (n, r) {
  var memo = {};
  return function (n, r) {
    var f = function (x) { return memo[x] || (memo[x] = pm.factorial(x)); };
    return f(n) / (f(r) * f(n - r));
  };
})();

var count = 0;

for (var n = 23; n <= 100; n++) {
  for (var r = 1; r <= n; r++) {
    if (Math.floor(choose(n, r)) > 1000000) ++count;
  }
}

console.log(count);
