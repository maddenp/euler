/* jshint node: true */

"use strict";

var pm = require('./pm.js');

var pyramid = pm.readfile('067.dat');

var Tree = function(pyramid, index, level, parent) {
  var lindex = level + index + 0;
  var rindex = level + index + 1;
  if (pyramid[lindex]) {
    if (parent && parent.l && parent.l.r) {
      this.l = parent.l.r;
    } else {
      this.l = new Tree(pyramid, lindex, level+1, this);
    }
  }
  if (pyramid[rindex]) {
    this.r = new Tree(pyramid, rindex, level+1, this);
  }
  var lmps = this.l ? this.l.max_path_sum : 0;
  var rmps = this.r ? this.r.max_path_sum : 0;
  this.max_path_sum = pyramid[index] + Math.max(lmps, rmps);
};

var tree = new Tree(pyramid, 0, 1, null);

console.log(tree.max_path_sum);
