/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

for (var i = 1; i <= 100; i++) {
  var x = Math.sqrt(i);
  if (Math.floor(x) === x) continue;
  console.log(i);
}
