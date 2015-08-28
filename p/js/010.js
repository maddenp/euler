/* jshint node: true */

"use strict";

var x, composite, sum, i, j;

x=2000000;
for (composite=[], sum=0,i=2;i<x;i++) {
  if (composite[i]) continue;
  sum+=i;
  for (j=i+i;j<x;j+=i) composite[j]=1;
}
console.log(sum);
