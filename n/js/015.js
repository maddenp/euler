previousArray = [1]
gridHeight = 20
for(j=0; j<gridHeight*2; j++){
	currentArray = new Array(previousArray.length + 1)

	for(i=0; i<previousArray.length + 1; i++){
		if(i==0){
			currentArray[i] = 1
		}	
		else if(i==previousArray.length){
			currentArray[i] = 1
		}
		else{
			currentArray[i] = previousArray[i-1] + previousArray[i]
		}
	}
	previousArray = currentArray
}

paths = currentArray[(currentArray.length / 2) -.5]
console.log(paths)
