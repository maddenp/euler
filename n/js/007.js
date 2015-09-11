var primeCount = 0
function isPrime(number){
	for(i=2; i<=Math.sqrt(number); i++){
		if(number%i==0){
			return;
		}
	}
	primeCount ++
}

var prime;
for(j=2; primeCount<10001; j++){
	isPrime(j)
	prime = j
}

console.log(prime)
