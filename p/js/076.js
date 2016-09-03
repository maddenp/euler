/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const limit = 100;

const gpn = n => {

  // https://en.wikipedia.org/wiki/Pentagonal_number#Generalized_pentagonal_numbers_and_centered_hexagonal_numbers

  if (n % 2 === 0) {
    n = (n / 2) + 1;
    return ((1 - n) * (3 * (1 - n) - 1)) / 2;
  }
  n = (n + 1) / 2;
  return (3 * n * n - n) / 2;
};

const seen = {0: 1};

const p = (n) => {

  // https://en.wikipedia.org/wiki/Partition_(number_theory)#Generating_function

  if (n < 0) return 0;
  if (seen[n]) return seen[n];
  var sum = p(n - 1);
  var i = 2;
  var coef = 1;
  while (n - i >= 0) {
    var gpn_i = gpn(i);
    var factor = p(n - gpn_i);
    if (factor === 0) break;
    sum += coef * factor;
    coef = Math.floor(i / 2) % 2 === 0 ? 1 : -1;
    i++;
  }
  seen[n] = sum;
  return sum;

};

for (var n = 1; n <= limit; n++) p(n);

console.log(seen[limit] - 1);
