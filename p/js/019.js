/* jshint node: true */
/*jslint indent: 2 */
/*jslint white: true */

"use strict";

var month_days_std = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var sum = 0;
var weekday = 0;
for (var year = 1900; year < 2001; year++) {
  var month_days = month_days_std.slice(0);
  if (year % 4 === 0 && year !== 1900) {
    month_days[1] = 29;
  }
  for (var month = 0; month < 12; month++) {
    for (var month_day = 0; month_day < month_days[month]; month_day++) {
      if (weekday === 6 && month_day === 0 && year > 1900) {
        sum++;
      }
      weekday = (weekday + 1) % 7;
    }
  }
}
console.log(sum);
