for (s=0,n=1,i=2;s<250;i++) {
  n+=i;
  for (s=0,j=1;j<=Math.sqrt(n);j++) if (n%j==0) s+=1;
}
console.log(n);
