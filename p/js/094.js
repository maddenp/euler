/* jshint esversion: 6 */
/* jshint loopfunc: true */
/* jshint node: true */

"use strict";

const pm = require('./pm');

/*
 * Consider the isoceles triangle with side lengths 'a', base length 'b', and
 * height 'h', where b = a + 1 or b = a - 1, per the problem statement. The
 * triangle's area is 1/2 * b * h. For the case b = a + 1,
 *
 * h^2                  = a^2 - (b/2)^2       | Pythagorean Theorem
 * h^2                  = a^2 - b^2 / 4       |
 * h^2                  = a^2 - (a + 1)^2 / 4 | b = a + 1
 * h^2                  = (3a^2 - 2a - 1) / 4 |
 * 4h^2                 = 3a^2 - 2a - 1       | multiply both sides by 4
 * (4/3)h^2             = a^2 - (2/3)a - 1/3  |
 * (4/3)h^2 + 1/3       = a^2 - (2/3)a        |
 * (4/3)h^2 + 1/3 + 1/9 = a^2 - (2/3)a + 1/9  | complete the square
 * (4/3)h^2 + 4/9       = (a - 1/3)^2         |
 * 12h^2 + 4            = 9(a - 1/3)^2        | multiply both sides by 9
 * 12h^2 + 4            = 3^2(a - 1/3)^2      |
 * 12h^2 + 4            = (3a - 1)^2          |
 * 3h^2 + 1             = (3a - 1)^2 / 4      | divide both sides by 4
 * 3h^2 + 1             = (3a - 1)^2 / 2^2    |
 * 3h^2 + 1             = ((3a -1) / 2)^2     |
 *
 * Let x = (3a -1)/2 and y = h, and we have
 *
 * 3y^2 + 1 = x^2, or x^2 - 3y^2 = 1
 *
 * which is a Pell Equation with n = 3. To retrieve 'a' from 'x', we have
 *
 * a = (2 * x + 1) / 3
 *
 * (The case for b = a - 1 is the same, but with a = (2 * x - 1) / 3)
 *
 * So, we obtain the fundamental solution to the Pell Equation, then generate
 * all additional solutions until the perimeter of the a-a-b triangle exceeds
 * the limit. For each solution, we retrieve 'a' from 'x' both ways. If 'a' is
 * an integer, then so is 'b', in which case we have an integer perimeter, so
 * check whether the area is integral, and increment the perimeter sum if so.
 *
 * We skip the fundamental solution (2,1) because it does not give a triangle.
 *
 * See https://goo.gl/dSgIoI in re: obtaining additional solutions from the
 * fundamental solution.
 *
 */

const limit = 1e9;
const n = 3;
const fs = pm.pell_fundamental_solution(n);
const x1 = pm.a2n(fs[0]);
const y1 = pm.a2n(fs[1]);

var sum = 0;
var x = x1;
var y = y1;

while (true) {
  var x_new = x1 * x + n * y1 * y;
  var y_new = x1 * y +     y1 * x;
  x = x_new;
  y = y_new;
  if (x + x + y > limit) break;
  [+1, -1].forEach(i => {
    var a = (2 * x + i) / 3;
    if (Number.isInteger(a)) {
      var b = a + i;
      var h = Math.sqrt(a * a - b * b / 4);
      if (Number.isInteger(0.5 * b * h)) sum += a + a + b;
    }
  });
}

console.log(sum);
