triangle = []
var triangleNumber = 0
var divisors = 0

for(var i=1; divisors<250; i++){
	triangleNumber = 0
	triangle.push(i)

	for(var j=0; j<triangle.length; j++){
		triangleNumber += triangle[j]
		
	}

	divisors = 0
	for(var x=0; x<=Math.sqrt(triangleNumber); x++){
		if(triangleNumber % x == 0){
			divisors++
		}

	}
}

console.log(triangleNumber)



