/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

const apply_to_convergents = (d, fn) => {
  
  // http://goo.gl/uSYJLz re: method for calculating convergent

  var a = Math.floor(Math.sqrt(d));
  var b = 1;
  var c = -a;

  var conv_num_old = [1];
  var conv_den_old = [0];

  var conv_num = pm.n2a(a);
  var conv_den = [1];

  while (true) {
    b = (d - c * c) / b;
    a = Math.floor((Math.sqrt(d) - c) / b);
    c = -c - a * b;
    var tmp_num = conv_num;
    var tmp_den = conv_den;
    var aa = pm.n2a(a);
    conv_num = pm.array_add(pm.array_times_array(conv_num, aa), conv_num_old);
    conv_den = pm.array_add(pm.array_times_array(conv_den, aa), conv_den_old);
    conv_num_old = tmp_num;
    conv_den_old = tmp_den;
    if (fn(d, conv_num, conv_den)) {
      return([conv_num, conv_den]);
    }
  }

};

const fn = (d, x, y) => {
  var lhs = pm.array_times_array(x, x);
  var rhs = pm.array_add(pm.array_times_int(pm.array_times_array(y, y), d), [1]);
  return pm.array_equal(lhs, rhs);
};

var max_len = 0;
var the_d = 0;

for (var d = 2; d <= 1000; d++) {
  if (Math.sqrt(d) === Math.floor(Math.sqrt(d))) continue;
  var fundamental_solution = apply_to_convergents(d, fn);
  var fs_x = fundamental_solution[0].toString();
  var len = fs_x.length;
  if (len > max_len) {
    max_len = len;
    the_d = d;
  }
}

console.log(the_d);
