/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const f = (n, limit) => {
  
  var a = Math.floor(Math.sqrt(n));
  var b = 1;
  var c = -a;
  var i = 0;

  var conv_num_old = 1;
  var conv_den_old = 0;

  var conv_num = a;
  var conv_den = 1;

  // http://goo.gl/uSYJLz for info on method for calculating convergent

  while (i++ < limit) {
    b = (n - c * c) / b;
    a = Math.floor((Math.sqrt(n) - c) / b);
    c = -c - a * b;
    var tmp_num = conv_num;
    var tmp_den = conv_den;
    conv_num = a * conv_num + conv_num_old;
    conv_den = a * conv_den + conv_den_old;
    conv_num_old = tmp_num;
    conv_den_old = tmp_den;
    console.log('###',conv_num,conv_den);
  }

};

console.log(f(2, 8));
