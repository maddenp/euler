/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

// https://en.wikipedia.org/wiki/Pythagorean_triple#Parent.2Fchild_relationships

const count = [];
const limit = 1500000;
const queue = [[3, 4, 5]]; // the basic triangle

while (queue.length > 0) {
  var T = queue.pop();
  var a = T[0];
  var b = T[1];
  var c = T[2];
  var L = a + b + c;
  if (L > limit) continue;
  // The linear transformations below only produce the 'primitive' triples, but
  // all their scaled multiples are also Pythagorian triples. So generate and
  // record the multiples up to the limit.
  for (var k = 2; L <= limit; k++) {
    count[L] = count[L] ? count[L] + 1 : 1;
    T = [a*k, b*k, c*k];
    L = a*k + b*k + c*k;
  }
  // These linear transformations produce the next wave of primitive triples.
  queue.push([ a-2*b+2*c,  2*a-b+2*c,  2*a-2*b+3*c]);
  queue.push([ a+2*b+2*c,  2*a+b+2*c,  2*a+2*b+3*c]);
  queue.push([-a+2*b+2*c, -2*a+b+2*c, -2*a+2*b+3*c]);
}

var sum = 0;

for (var i = 0; i < count.length; i++) {
  if (count[i] === 1) sum++;
}

console.log(sum);
