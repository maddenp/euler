/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

const pm = require('./pm');

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

  var count = 0;

  const work = makeWork();
  printWork(work);
  console.log('---');
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

    printBoard(board);
    printWork(work);
    count++;
    if (count > 1) break;
  }
  return board;
};

const boards = loadBoards();
var board = boards[1];
printBoard(board);
console.log('---');
solveBoard(board);
