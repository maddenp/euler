/* jshint node: true */

"use strict";

var a, c, i, j, n, x;

a=[];                        // the sieve array
c=0;                         // the count of primes found so far
n=10001;                     // the number of the prime we seek
x=1000000;                   // the sieve space
for (i=2;i<x;i++) a[i]=true; // make every number a candidate prime
for (i=2;i<x;i++) {          // loop over candidate primes
  if (a[i]) {                // i is prime if its sieve array slot is still true
    c+=1;                    // we've found another prime
    for (j=i;j<x;j+=i) {     // iterate over the prime's multiples...
      a[j]=false;            // ...and disqualify each
    }                        //
  }                          //
  if (c==n) {                // if we've found the nth prime...
    console.log(i);          // ...print it and...
    break;                   // ...we're done.
  }
}
