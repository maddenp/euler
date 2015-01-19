var i,j,n,s;
for (s=0,n=1,i=2;s<250;n+=i,i++) {
  for (s=0,j=1;j<=Math.sqrt(n);j++) if (n%j==0) s++;
}
console.log(n-i+1);
