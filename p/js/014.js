function chainlen(n) {
  var k,m,s;
  if (k=known[n]) return k;
  for (m=n,s=1;m>1;s++) {
    m=(m%2==0)?(m/2):(3*m+1);
    if (k=known[m]) { s+=k; break; }
  }
  known[n]=s;
  return s;
}

var c,known,maxlen,maxn,n;

for (known=[],maxlen=1,maxn=1,n=1;n<1000000;n++) {
  if ((c=chainlen(n))>maxlen) { maxlen=c; maxn=n; }
}

console.log(maxn);
