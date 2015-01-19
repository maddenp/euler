triangle = []
var triangleNumber = 0
var divisors = 0

for(var i=1; divisors<250; i++){
	triangle.push(i)
	triangleNumber += triangle[i-1]

	divisors = 0
	for(var x=0; x<=Math.sqrt(triangleNumber); x++){
		if(triangleNumber % x == 0){
			divisors++
		}
	}
}

console.log(triangleNumber)



