sieve = []
upper = 2000000
total = 0
for(i=2;i<upper; i++){
	sieve.push(i)
}

var p = 2
for(f=2; f<=upper; f++){
	for(i=p+p; i<upper; i+=p){
		if(sieve[i-2]!=null) {sieve[i-2] = false }

	}
	for(x=p-1; x<sieve.length; x++){
		if(sieve[x]){
			p = sieve[x]
			break;
		}
	}
	
}
var total = 0
for(i=0; i<sieve.length; i++){
	if(sieve[i].toString().indexOf("x")==-1){
			total += sieve[i]
	}
}

console.log(total)
