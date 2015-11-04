/* jshint node: true */

"use strict";

var pm = require('./pm.js');

var answer_digits = [];

// Keep source digits in lexiographic order, so that picking the nth remaining
// digit keeps the answer as "small" as possible.

var source_digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// We want to work *past* 999,999 permutations, so that the following one
// (composed of the selected answer digits plus whatever remains of the
// source digits (in lexiographic order) is the one-millionth.

var x = 999999;

// Repeatedly reduce x -- the number of permutations we want to work past --
// by some number of accounted-for permutations. For example, when n is 9,
// n! is 362,880, which divides x (currently 999,999) 2 times with a
// remainder of 274,239. 2 x n! = 725,760, so this number of permutations (all
// those with a leading 0 or 1) are used up reducing x to 274,239. Since the
// final answer cannot begin with 0 or 1 (all used up), it must begin with 2.
// So, push 2 onto the array of answer digits, and remove it from the array of
// source digits, since it cannot appear again in the answer permutation. Then
// repeat this process: Since the leading digit of the answer is now fixed,
// consider how the new x value can be reduced by some multiple of 8!, and so
// on.

for (var n = source_digits.length - 1; x > 0; n--) {
  var f = pm.factorial(n);
  var m = Math.floor(x / f);
  x -= f * m;
  answer_digits.push(source_digits[m]);
  source_digits.splice(m,1);
}

answer_digits = answer_digits.concat(source_digits);

console.log(pm.a2s(answer_digits, ''));
