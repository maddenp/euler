/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

function is_non_prime(n) {
  if (n < 2) return true;
  return !pm.is_prime(n);
}

var max = 0;
var product = 0;

for (var a = 0; a < 1000; a++) {
  for (var b = 0; b < 1000; b++) {
    var active_an_bn = true, active_an_bp = true, active_ap_bn = true, active_ap_bp = true;
    var count_an_bn = 0, count_an_bp = 0, count_ap_bn = 0, count_ap_bp = 0;
    var n = 0;
    while (active_an_bn || active_an_bp || active_ap_bn || active_ap_bp) {
      var m = n * n;
      var o = a * n;
      if (active_an_bn) {
        if (is_non_prime(m - o - b)) { active_an_bn = false; } else { ++count_an_bn; }
      }
      if (active_an_bp) {
        if (is_non_prime(m - o + b)) { active_an_bp = false; } else { ++count_an_bp; }
      }
      if (active_ap_bn) {
        if (is_non_prime(m + o - b)) { active_ap_bn = false; } else { ++count_ap_bn; }
      }
      if (active_ap_bp) {
        if (is_non_prime(m + o + b)) { active_ap_bp = false; } else { ++count_ap_bp; }
      }
      ++n;
    }
    if (count_an_bn > max) { max = count_an_bn; product = -a * -b; }
    if (count_an_bp > max) { max = count_an_bp; product = -a * +b; }
    if (count_ap_bn > max) { max = count_ap_bn; product = +a * -b; }
    if (count_ap_bp > max) { max = count_ap_bp; product = +a * +b; }
  }
}

console.log(product);
