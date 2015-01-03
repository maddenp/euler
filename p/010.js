x=2000000;
for (sieve=[],sum=0,i=2;i<x;i++) {
  if (sieve[i]) continue;
  sum+=i;
  for (j=i+i;j<x;j+=i) sieve[j]=1;
}
console.log(sum);
