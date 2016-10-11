/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const pm = require('./pm');

var a = pm.readfile('079.dat').split(',').map(s => s.split('').map(d => parseInt(d)));

var follows = {};

a.forEach(n => n.forEach(d => follows[d] = {}));

a.forEach(n => {
  follows[n[1]][n[0]] = true;
  follows[n[2]][n[1]] = true;
});

var sol = Object.keys(follows);

const shift = (a, i, j) => {
  const b = [];
  const tmp = a[i];
  for (var k = 0; k < a.length; k++) {
    if (k < i || k > j) {
      b[k] = a[k];
    } else if (k < j) {
      b[k] = a[k + 1];
    } else {
      b[k] = tmp;
    }
  }
  return b;
};

Object.keys(follows).forEach(d => {
  Object.keys(follows[d]).forEach(e => {
    var id = sol.indexOf(d);
    var ie = sol.indexOf(e);
    if (ie > id) sol = shift(sol, id, ie);
  });
});

console.log(pm.a2n(sol));
