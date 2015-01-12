main:
for (n=1,i=2;;n+=i,i++) {
  for (s=0,j=1;j<=Math.sqrt(n);j++) if (n%j==0) s+=1;
  if (n>1) s*=2;
  if (s>500) {
    console.log(n);
    break main;
  }
}

