/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

const good = (board) => {
  for (var r = 0; r < 9; r++) {
    if (pm.array_sum(board[r]) !== 45) return false;
  }
  for (var c = 0; c < 9; c++) {
    var sum = 0;
    for (var r = 0; r < 9; r++) sum += board[r][c];
    if (sum !== 45) return false;
  }
  for (var srq = 0; srq < 7; srq += 3) {
    for (var sqc = 0; sqc < 7; sqc += 3) {
      var sum = 0;
      for (r = srq; r < srq + 3; r++) {
        for (c = sqc; c < sqc + 3; c++) {
          sum += board[r][c];
        }
      }
      if (sum !== 45) return false;
    }
  }
  return true;
};

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

const make = () => {
  const work = [];
  for (var r = 0; r < 9; r++) {
    work[r] = [];
    for (var c = 0; c < 9; c++) {
      work[r].push(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
  }
  return work;
};

const printb = (board) => {
  board.forEach(row => console.log(JSON.stringify(row)));
};

const printw = (work) => {
  const f = s => {
    var a = '';
    for (var n = 1; n <= 9; n++) a = `${a} ${s.has(n) ? n : 0}`;
    a += ` (${s.size})`;
    return a;
  };
  work.forEach(row => console.log(row.reduce((m, e) => m += f(e), '')));
};

const solve = (board) => {
  const work = make();
  var unsolved = true;
  var unchanged = true;
  while (unsolved) {
    unsolved = false;
    for (var r = 0; r < 9; r++) {
      for (var c = 0; c < 9; c++) {
        if (work[r][c].size === 1) continue;
        unsolved = true;
        if (board[r][c]) {
          work[r][c] = new Set([board[r][c]]);
          continue;
        }
        for (var rr = 0; rr < 9; rr++) work[r][c].delete(board[rr][c]);
        for (var cc = 0; cc < 9; cc++) work[r][c].delete(board[r][cc]);
        var sqr = Math.floor(r/3) * 3;
        var sqc = Math.floor(c/3) * 3;
        for (var rr = sqr; rr < sqr + 3; rr++) {
          for (var cc = sqc; cc < sqc + 3; cc++) work[r][c].delete(board[rr][cc]);
        }
        if (work[r][c].size === 1) {
          board[r][c] = Array.from(work[r][c])[0];
          unchanged = false;
        }
      }
    }
    printw(work);
    printb(board);
    if (unchanged) break;
    unchanged = true;
  }
  if (good(board)) return board;
  return false;
};

const boards = load();
var board = boards[0];
printb(board);
var soln = solve(board);
if (soln) {
  printb(soln);
} else {
  console.log('FAIL');
}
