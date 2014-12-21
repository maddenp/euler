// C-style for-loop abuse and ternary operator FTW!

var a,b,sum;
for ( a=1, b=2, sum=0; a<4000000; b+=a, a=b-a, sum += a%2==0 ? a : 0 );
console.log(sum);

// :( No destructuring assignment in JS yet (http://goo.gl/4pNuY3)
