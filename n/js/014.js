function collatz(n){
	var result = n
	
	for(i=1; result>1; i++){
		result = result%2==0 ? result/=2 : (result * 3) + 1
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