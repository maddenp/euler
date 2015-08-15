"use strict";

//var pyramid =
//[
//                            75,
//                          95, 64,
//                        17, 47, 82,
//                      18, 35, 87, 10,
//                    20,  4, 82, 47, 65,
//                  19,  1, 23, 75,  3, 34,
//                88,  2, 77, 73,  7, 63, 67,
//              99, 65,  4, 28,  6, 16, 70, 92,
//            41, 41, 26, 56, 83, 40, 80, 70, 33,
//          41, 48, 72, 33, 47, 32, 37, 16, 94, 29,
//        53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14,
//      70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57,
//    91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48,
//  63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31,
//  4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23
//];

var pyramid = [3,7,4,2,4,6,8,5,9,3];

var Tree = function(pyramid,index,level,parent) {
  this.n = pyramid[index];
  this.weight = this.n;
  var lindex = level + index + 0;
  var rindex = level + index + 1;
  if (pyramid[lindex]) {
    if (parent && parent.l && parent.l.r) {
      this.l = parent.l.r;
    } else {
      this.l = new Tree(pyramid, lindex, level+1, this);
      this.weight += this.l.weight;
    }
  }
  if (pyramid[rindex]) {
    this.r = new Tree(pyramid, rindex, level+1, this);
    this.weight += this.r.weight;
  }
};

var p = new Tree(pyramid,0,1,null);

var max_path_sum = p.n;

while (p) {
  max_path_sum += p.n;
  var lweight = p.l ? p.l.weight : 0;
  var rweight = p.r ? p.r.weight : 0;
  p = lweight >= rweight ? p.l : p.r;
}

console.log(max_path_sum);
