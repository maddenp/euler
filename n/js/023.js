

var halfsies = 0
var abundantNumbers = []
var max = 28123
var theOnesWeAreLookingFor = []

findAllTheAbundantNumbers()

function findAllTheAbundantNumbers(){
	for(var x=1; x<=max; x++){
		var divisors = findDivisors(x)
		var sumOfDivisors = 0
		for(var f=0; f<divisors.length; f++){
			sumOfDivisors += divisors[f]
		}
		if(sumOfDivisors > x){
			abundantNumbers.push(x)
		}
	}
}

function findDivisors(num){
	halfsies = Math.sqrt(num)
	var divisors = [1]
	for(b=2; b<=halfsies; b++){
		if(num % b == 0 ){
			divisors.push(b)
			if (num / b !== b) {
		        divisors.push(num / b);
		     }
		}
	}
	return divisors
}

for(var p=0; p<abundantNumbers.length; p++){
	for(var f=0; f<abundantNumbers.length; f++){
		var sum = abundantNumbers[p] + abundantNumbers[f]
		if(sum <= max){
			theOnesWeAreLookingFor[sum] = true
		}
		else{
			break;
		}
	}
}
var sum = 0
for(var k=0; k<theOnesWeAreLookingFor.length; k++){
	if(!theOnesWeAreLookingFor[k]){
		sum += k
	}
}
console.log(sum)





