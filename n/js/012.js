var triangleNumber = 1
var divisors = 0

for(var i=2; divisors<250; i++){
	divisors = 0
	for(var x=0; x<=Math.sqrt(triangleNumber); x++){
		if(triangleNumber % x == 0){
			divisors++
		}
	}
	triangleNumber += i

}

console.log(triangleNumber)
