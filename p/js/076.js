/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const limit = 10;

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
  console.log('###',n);
  if (n < 0) return 0;
  if (seen[n]) {
    console.log('seen: '+n+'='+seen[n]);
    return seen[n];
  }
  var sum = p(n - 1);
  var i = 2;
  var coef = 1;
  console.log('initial: n='+n+' sum='+sum+' i='+i+' coef='+coef);
  while (n - i >= 0) {
    sum += coef * p(n - gpn(i));
    coef *= -1;
    i++;
    console.log('n='+n+' sum='+sum+' i='+i+' coef='+coef);
  }
  seen[n] = sum;
  console.log('seen: '+JSON.stringify(seen));
  return sum;
};

for (var n = 1; n <= limit; n++) {
  console.log('---',n);
  console.log('ans: '+p(n));
}
