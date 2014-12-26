sumOfSquares = 0
squareOfSums = 0
for(i=1;i<=100;i++){
	sumOfSquares += i*i
	squareOfSums += i;
}
squareOfSums *= squareOfSums

console.log("Difference: " + (squareOfSums - sumOfSquares))




