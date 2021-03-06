/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

const MSI = Number.MAX_SAFE_INTEGER;

const matrix = require('fs').readFileSync('082.dat', 'utf8').trim().split('\n').map(x => x.split(',').map(s => parseInt(s)));

// const matrix = [[131, 673, 234, 103,  18],
//                 [201,  96, 342, 965, 150],
//                 [630, 803, 746, 422, 111],
//                 [537, 699, 497, 121, 956],
//                 [805, 732, 524,  37, 331]];

const findmin = (Q, dist) => {
  // This is horrible. Replace with priority queue.
  var min_d = MSI;
  var min_i;
  for (var i = 0; i < Q.length; i++) {
    var d = dist[Q[i].row][Q[i].col];
    if (d < min_d) {
      min_d = d;
      min_i = i;
    }
  }
  return min_i;
};

const dijkstra = source => {

  // https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm

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

  const update_distance = v => {
    var to_v_now = dist[v.row][v.col] || MSI;
    var to_v_alt = to_u + matrix[v.row][v.col];
    if (to_v_alt < to_v_now) {
      dist[v.row][v.col] = to_v_alt;
      prev[v.row][v.col] = u;
    }
  };

  while (Q.length > 0) {

    var u = Q.splice(findmin(Q, dist), 1)[0];
    var to_u = dist[u.row][u.col];
    var neighbors = [];

    if (u.row < dist.length - 1) neighbors.push({row: u.row + 1, col: u.col});        // right neighbor
    if (u.col < dist[u.row].length - 1) neighbors.push({row: u.row, col: u.col + 1}); // below neighbor
    if (u.row > 0) neighbors.push({row: u.row - 1, col: u.col});                      // above neighbor
    if (u.col > 0) neighbors.push({row: u.row, col: u.col - 1});                      // left neighbor

    neighbors.forEach(update_distance);

  }

  return dist[dist.length - 1][dist[0].length - 1]; // bottom right

};

console.log(dijkstra({row: 0, col:0 })); // top left
