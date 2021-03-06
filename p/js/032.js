/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

function pandigital_product(n, m, p) {
  if (pm.ndigits(n) + pm.ndigits(m) + pm.ndigits(p) !== 9) return false;
  var narray = (pm.n2a(n).concat(pm.n2a(m)).concat(pm.n2a(p)));
  return pm.is_pandigital(narray);
}

function pp_find(n_lo, n_hi, m_lo, m_hi, pp) {
  for (var n = n_lo; n < n_hi; n++) {
    for (var m = m_lo; m < m_hi; m++) {
      var p = n * m;
      if (pandigital_product(n, m, p) && pp.indexOf(p) === -1) pp.push(p);
    }
  }
}

var pp = [];

/* The product of an n-digit number and an m-digit number can have as few as
 * n + m - 1 digits, and as many as n + m digits. For example, the product of
 * the smallest 2-digit number (10) and the smallest 3-digit number (100) is
 * 1000, with 4 digits; and the product of the largest 2-digit number (99) and
 * the largest 3-digit number (999) is 98901, with 5 digits. In this case, the
 * sum of n + m + p (where p is the number of digits in n * m), will either be
 * 9 or 10. Since we require that n + m + p = 9, there are only two (n, m) pairs
 * worth considering: (1, 4), with the n-digit number ranging from 1 to 9 and
 * the m-digit number ranging from 1000 to 9999; and (2, 3), with the n-digit
 * number ranging from 10 to 99 and the m-digit number ranging from 100 to 9999.
 */

pp_find(1, 10, 1000, 10000, pp);
pp_find(10, 100, 100, 1000, pp);

console.log(pm.array_sum(pp));
