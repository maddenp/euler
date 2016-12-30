/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var before = 0;
var after = 0;

require('fs').readFileSync('089.dat', 'utf8').split('\n').forEach(s => {

  before += s.length;

  s = s.replace(/IIII/, 'IV');
  s = s.replace(/VIV/, 'IX');
  s = s.replace(/VIIII/, 'IX');

  s = s.replace(/XXXX/, 'XL');
  s = s.replace(/LXL/, 'XC');
  s = s.replace(/LXXXX/, 'XC');

  s = s.replace(/CCCC/, 'CD');
  s = s.replace(/DCD/, 'CM');
  s = s.replace(/DCCCC/, 'CM');

  after += s.length;

});

console.log(before - after);
