/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var i, n, sum_of_naturals, sum_of_squares, square_of_sum_of_naturals;

n = 100;
sum_of_naturals = n * (n + 1) / 2;
square_of_sum_of_naturals = sum_of_naturals * sum_of_naturals;
sum_of_squares = 0;
for (i = 1; i <= n; i++) sum_of_squares += i * i;
console.log(square_of_sum_of_naturals - sum_of_squares);
