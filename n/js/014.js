function collatz(n){
	for(i=1; n>1; i++){
		n = n%2==0 ? n/=2 : (n * 3) + 1
	}
	return i;
}

chain = 0
highestBidder = 0
for(var j=1000000; j>0; j--){
	if(collatz(j) > chain){
		chain = collatz(j)
		highestBidder = j
	}
}

console.log(highestBidder)