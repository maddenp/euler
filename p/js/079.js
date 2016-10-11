/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var codes = pm.readfile('079.dat').split(',').map(s => s.split('').map(d => parseInt(d)));

var follows = {};

codes.forEach(n => n.forEach(d => follows[d] = {}));

codes.forEach(n => {
  follows[n[1]][n[0]] = true;
  follows[n[2]][n[1]] = true;
});

var a = Object.keys(follows);

const shift = (a, i, j) => {
  const x = a[i];
  for (var k = i; k <= j; k++) {
    if (k == j) {
      a[k] = x;
    } else {
      a[k] = a[k + 1];
    }
  }
};

Object.keys(follows).forEach(d => {
  Object.keys(follows[d]).forEach(e => {
    var id = a.indexOf(d);
    var ie = a.indexOf(e);
    if (ie > id) shift(a, id, ie);
  });
});

console.log(pm.a2n(a));
