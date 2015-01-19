var i,j,s=20,paths={};

// Initially, each vertex is aware of zero paths that reach it, so initialize
// all path counts to zero.

for (i=0;i<=s;i++) {
  for (j=0;j<=s;j++) {
    paths[[i,j]]=0;
  }
}

// There is exactly one way to reach vertex (0,0).

paths[[0,0]]=1;

// For each vertex, if it has a rightward neighbor, update that neighbor's path
// count with the number of paths that reach THIS vertex. That is, if there are
// 'n' paths reaching THIS vertex, and if THIS vertex can reach the neighbor,
// then there are also (at least) 'n' paths that reach the neighbor. If this
// vertex has a downward neighbor, update it similarly. In the end, the paths
// reaching any vertex will be the sum of the paths reaching its leftward
// neighbor and the paths reaching its upward neighbor.

for (i=0;i<=s;i++) {
  for (j=0;j<=s;j++) {
    if (i+1<=s) paths[[i+1,j]]+=paths[[i,j]];
    if (j+1<=s) paths[[i,j+1]]+=paths[[i,j]];
  }
}

// Report the path count for the lower-right vertex.

console.log(paths[[s,s]]);
