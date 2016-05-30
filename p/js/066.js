/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const apply_to_convergents = (n, f) => {
  
  // http://goo.gl/uSYJLz re: method for calculating convergent

  var a = Math.floor(Math.sqrt(n));
  var b = 1;
  var c = -a;

  var conv_num_old = 1;
  var conv_den_old = 0;

  var conv_num = a;
  var conv_den = 1;

  while (true) {
    b = (n - c * c) / b;
    a = Math.floor((Math.sqrt(n) - c) / b);
    c = -c - a * b;
    var tmp_num = conv_num;
    var tmp_den = conv_den;
    conv_num = a * conv_num + conv_num_old;
    conv_den = a * conv_den + conv_den_old;
    conv_num_old = tmp_num;
    conv_den_old = tmp_den;
    if (f(n, conv_num, conv_den)) {
      return([conv_num, conv_den]);
    }
  }

};

const f = (d, x, y) => x * x - d * y * y === 1;

for (var d = 2; d <= 7; d++) {
  if (Math.sqrt(d) === Math.floor(Math.sqrt(d))) continue;
  console.log(apply_to_convergents(d, f));
}
