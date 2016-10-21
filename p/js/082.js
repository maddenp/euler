/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const MSI = Number.MAX_SAFE_INTEGER;

// const matrix = require('fs').readFileSync('082.dat', 'utf8').trim().split('\n').map(x => x.split(',').map(s => parseInt(s)));

const matrix = [[131, 673, 234, 103,  18],
                [201,  96, 342, 965, 150],
                [630, 803, 746, 422, 111],
                [537, 699, 497, 121, 956],
                [805, 732, 524,  37, 331]];

const dijkstra = source => {

  const dist = [];
  const prev = [];
  const Q = [];

  for (var row = 0; row < matrix.length; row++) {
    dist[row] = [];
    prev[row] = [];
    for (var col = 0; col < matrix[0].length; col++) {
      dist[row][col] = MSI;
      prev[row][col] = undefined;
      Q.push({row: row, col: col});
    }
  }

  dist[source.row][source.col] = matrix[source.row][source.col];

  while (Q.length > 0) {
    var min_d = MSI;
    var min_i = undefined;
    for (var i = 0; i < Q.length; i++) {
      var d = dist[Q[i].row][Q[i].col]
      if (d < min_d) {
        min_d = d;
        min_i = i;
      }
    }
    var u = Q.splice(min_i, 1)[0];
    var to_u = dist[u.row][u.col];
    var neighbors = []
    if (u.row < dist.length - 1) neighbors.push({row: u.row + 1, col: u.col});
    if (u.col < dist[u.row].length - 1) neighbors.push({row: u.row, col: u.col + 1});
    if (u.row > 0) neighbors.push({row: u.row - 1, col: u.col});
    neighbors.forEach(v => {
      var to_v_now = dist[v.row][v.col] || MSI;
      var to_v_alt = to_u + matrix[v.row][v.col];
      if (to_v_alt < to_v_now) {
        dist[v.row][v.col] = to_v_alt;
        prev[v.row][v.col] = u;
      }
    });
  }

  var min = dist.reduce((m, e) => Math.min(m, e[e.length - 1]), MSI);

  return min;

}

console.log(dijkstra({row: 1, col: 0}));
