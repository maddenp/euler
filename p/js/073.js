/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const n = 12000;

var count = 0;

// Algorithm as given by Wikipedia's article on Farey sequences

var a = 0;
var b = 1;
var c = 1;
var d = n;

while (c <= n) {

  if (a/b > 1/2 && a/b < 2/3) ++count;

  var k = Math.floor((n + b) / d);
  var old_a = a;
  var old_b = b;
  a = c;
  b = d;
  c = k * c - old_a;
  d = k * d - old_b;

}

console.log(count);
