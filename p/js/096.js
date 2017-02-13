/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

// Algorithm described here: https://goo.gl/YPLiss

const load = () => {
  const boards = [];
  var i = 0;
  var board = [];
  require('fs').readFileSync('096.dat', 'utf8').split('\n').forEach(line => {
    if (i !== 0) {
      board.push(line.split('').map(x => parseInt(x)));
      if (i === 9) {
        boards.push(board);
        board = [];
      }
    }
    i = (i + 1) % 10;
  });
  return boards;
};

const safe = (n, r, c, board) => {
  for (var rr = 0; rr < 9; rr++) if (board[rr][c] === n) return false;
  for (var cc = 0; cc < 9; cc++) if (board[r][cc] === n) return false;
  var sqr = Math.floor(r/3) * 3;
  var sqc = Math.floor(c/3) * 3;
  for (var rr = sqr; rr < sqr + 3; rr++) {
    for (var cc = sqc; cc < sqc + 3; cc++) if (board[rr][cc] === n) return false;
  }
  return true;
};

const solve = (board, fn) => {
  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      if (board[r][c] === 0) {
        var b = board.reduce((m, e) => (m.push(e.slice()), m), []);
        for (var n = 1; n <= 9; n++) {
          if (safe(n, r, c, board)) {
            b[r][c] = n;
            if (solve(b, fn)) return true;
          }
        }
        return false;
      }
    }
  }
  fn(board);
};

var sum = 0;

const boards = load();
const fn = b => sum += b[0][0] * 100 + b[0][1] * 10 + b[0][2];

boards.forEach(board => solve(board, fn));

console.log(sum);
