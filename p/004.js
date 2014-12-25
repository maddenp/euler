largest=0;

for ( a=999; a>0; a-- ) {
  for ( b=a; b>0; b-- ) {
    p = a*b;
    q = p;
    r = 0;
    while ( q>0 ) {
      r = r*10 + q%10;
      q = Math.floor( q/10 );
    }
    if ( r==p && p>largest ) largest=p;
  }
}

console.log(largest);
