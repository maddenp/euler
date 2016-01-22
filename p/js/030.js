/* jshint node: true */

"use strict";

var pm = require('./pm');

function array_inc(a) {
  var changed = 0;
  var n = 1;
  for (var i = a.length - 1; i >=0; i--) {
    a[i] += n;
    changed += n;
    if (a[i] < 10) { n = 0 } else { a[i] -= 10; }
  }
  if (n === 1) {
    a.unshift(n);
    ++changed;
  }
  return changed;
}

function find_limit(exponent) {
  var c = Math.pow(9, exponent), max_int = 9, max_sum = c;
  while (max_sum >= max_int) {
    max_int = max_int * 10 + 9;
    max_sum += c;
  }
  return max_sum;
}

function raise(a, exponent, changed, raised) {
  for (var i = raised.length - 1; i >= 0; i--) {
    var offset = a.length > raised.length ? 1 : 0;
    if (changed > 0) {
      raised[i] = Math.pow(a[i + offset], exponent);
    }
    --changed;
  }
  if (offset === 1) {
    raised.unshift(Math.pow(a[0], exponent));
  }
}

var exponent = 5;
var start = 2;
var a = [start];
var raised = [Math.pow(start, exponent)];
var limit = find_limit(exponent);
var sum = 0;

for (var n = start; n < limit; n++) {
  var digit_sum = pm.array_sum(raised);
  if (digit_sum === n) {
    sum += n;
  }
  var changed = array_inc(a);
  raise(a, exponent, changed, raised);
}

console.log(sum);
