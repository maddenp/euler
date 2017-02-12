/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

const badBoard = (board) => {
  for (var r = 0; r < 9; r++) {
    if (pm.array_sum(board[r]) !== 45) return true;
  }
  for (var c = 0; c < 9; c++) {
    var sum = 0;
    for (var r = 0; r < 9; r++) sum += board[r][c];
    if (sum !== 45) return true;
  }
  for (var sq_r = 0; sq_r < 7; sq_r += 3) {
    for (var sq_c = 0; sq_c < 7; sq_c += 3) {
      var sum = 0;
      for (r = sq_r; r < sq_r + 3; r++) {
        for (c = sq_c; c < sq_c + 3; c++) {
          sum += board[r][c];
        }
      }
      if (sum !== 45) return true;
    }
  }
};

const loadBoards = () => {
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

const makeWork = () => {
  const work = [];
  for (var r = 0; r < 9; r++) {
    work[r] = [];
    for (var c = 0; c < 9; c++) {
      work[r].push(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
  }
  return work;
};

const printBoard = (board) => {
  board.forEach(row => console.log(JSON.stringify(row)));
};

const printWork = (work) => {
  const f = s => {
    var a = '';
    for (var n = 1; n <= 9; n++) a = `${a} ${s.has(n) ? n : 0}`;
    a += ` (${s.size})`;
    return a;
  };
  work.forEach(row => console.log(row.reduce((m, e) => m += f(e), '')));
};

const solveBoard = (board) => {
  const work = makeWork();

//   var count = 0;
//   printWork(work);
//   console.log('---');

  var unsolved = true;
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
        for (var rr = 0; rr < 9; rr++) {
          if (board[rr][c]) work[r][c].delete(board[rr][c]);
        }
        for (var cc = 0; cc < 9; cc++) {
          if (board[r][cc]) work[r][c].delete(board[r][cc]);
        }
        var sq_r = Math.floor(r/3) * 3;
        var sq_c = Math.floor(c/3) * 3;
        for (var rr = sq_r; rr < sq_r + 3; rr++) {
          for (var cc = sq_c; cc < sq_c + 3; cc++) {
            if (board[rr][cc]) work[r][c].delete(board[rr][cc]);
          }
        }
        if (work[r][c].size === 1) {
          board[r][c] = work[r][c].values().next().value;
        }
      }
    }

//     printBoard(board);
//     printWork(work);
//     count++;
//     if (count > 1) break;
  }
  return board;
};

const boards = loadBoards();
var board = boards[0];
// printBoard(board);
// console.log('---');

var soln = solveBoard(board);

if (badBoard(soln)) console.log('FAIL');
