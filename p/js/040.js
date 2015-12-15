/* jshint node: true */

"use strict";

var pm = require('./pm');

function digit(n, offset) {
  var a = pm.n2a_decimal(n);
  return a[a.length - offset - 1];
}

var count = 0, inc = 1, product = 1;
var goals = [1000000, 100000, 10000, 1000, 100, 1];

out: for (var ex = 0, goal = goals.pop(); ex < pm.log(goals[0]); ex++, inc++) {
  for (var n = Math.pow(10, ex); n < Math.pow(10, ex + 1); n++) {
    count += inc;
    if (count >= goal) {
      product *= digit(n, count - goal);
      if (goals.length > 0) {
        goal = goals.pop();
      } else {
        break out;
      }
    }
  }
}

console.log(product);
