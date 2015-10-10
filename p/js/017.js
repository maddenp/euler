/* jshint node: true */
/*jslint indent: 2 */
/*jslint white: true */

"use strict";

var units     = 3 + 3 + 5 + 4 + 4 + 3 + 5 + 5 + 4; // 'one', 'two', 'three', etc.
var teens     = 3 + 6 + 6 + 8 + 8 + 7 + 7 + 9 + 8 + 8; // 'ten', 'eleven', 'twelve', etc.
var twenties  = (10 * 6) + units; // 'twenty one', 'twenty two', etc. = 10 x 'twenty' + 'one' + 'two' + ...
var thirties  = (10 * 6) + units; // similarly for 'thirty' (six characters, like 'twenty')
var forties   = (10 * 5) + units; // 'forty' = 5 characters
var fifties   = (10 * 5) + units; // etc.
var sixties   = (10 * 5) + units;
var seventies = (10 * 7) + units;
var eighties  = (10 * 6) + units;
var nineties  = (10 * 6) + units;
var c0  = units + teens + twenties + thirties + forties + fifties + sixties + seventies + eighties + nineties; // 1-99
var c1  = ((3 + 7) * 100) + (3 * 99) + c0; // ('one' + 'hundred') * 100 + ('and' * 99) + 'one', 'two', ... 'ninety nine'
var c2  = ((3 + 7) * 100) + (3 * 99) + c0; // similarly for 'two hundred'
var c3  = ((5 + 7) * 100) + (3 * 99) + c0; // etc.
var c4  = ((4 + 7) * 100) + (3 * 99) + c0;
var c5  = ((4 + 7) * 100) + (3 * 99) + c0;
var c6  = ((3 + 7) * 100) + (3 * 99) + c0;
var c7  = ((5 + 7) * 100) + (3 * 99) + c0;
var c8  = ((5 + 7) * 100) + (3 * 99) + c0;
var c9  = ((4 + 7) * 100) + (3 * 99) + c0;
var sum = c0 + c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + 11; // 1-99 + all one-hundreds + all two hundreds + ... + 'one thousand'
console.log(sum);
