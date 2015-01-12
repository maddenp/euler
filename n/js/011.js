array1 = [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08]
array2 = [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00]
array3 = [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65]
array4 = [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91]
array5 = [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80]
array6 = [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50]
array7 = [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70]
array8 = [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21]
array9 = [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72]
array10 = [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95]
array11 = [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92]
array12 = [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57]
array13 = [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58]
array14 = [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40]
array15 = [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66]
array16 = [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69]
array17 = [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36]
array18 = [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16]
array19 = [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54]
array20 = [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]

arrays = []

arrays.push(array1)
arrays.push(array2)
arrays.push(array3)
arrays.push(array4)
arrays.push(array5)
arrays.push(array6)
arrays.push(array7)
arrays.push(array8)
arrays.push(array9)
arrays.push(array10)
arrays.push(array11)
arrays.push(array12)
arrays.push(array13)
arrays.push(array14)
arrays.push(array15)
arrays.push(array16)
arrays.push(array17)
arrays.push(array18)
arrays.push(array19)
arrays.push(array20)

verticalProductMax = 0
horizontalProductMax = 0
diagonalLRMax = 0
diagonalRLMax = 0

function horizontal(){
	for(i=0; i<arrays.length; i++){ // looping through list of arrays

		for(j=0; j<arrays[i].length; j++){ // looping through lines
			horizontalProduct = arrays[i][j] * arrays[i][j+1] * arrays[i][j+2] * arrays[i][j+3] 

			if(horizontalProduct > horizontalProductMax){
				horizontalProductMax = horizontalProduct
				
			}
		}
	}
	return horizontalProductMax
}

function vertical(){
	for(i=0; i<arrays.length-3; i++){
		for(j=0; j<arrays[i].length; j++){		
			verticalProduct = arrays[i][j] * arrays[i+1][j] * arrays[i+2][j] * arrays[i+3][j]
			if(verticalProduct > verticalProductMax){
				verticalProductMax = verticalProduct
			}
		}
	}

	return verticalProductMax

}

function lRDiagonal(){
	for(i=0; i<arrays.length-3; i++){
		for(j=0; j<arrays[i].length; j++){			
			diagonalLR = arrays[i][j+3] * arrays[i+1][j+2] * arrays[i+2][j+1] * arrays[i+3][j]
			if(diagonalLR > diagonalLRMax){
				diagonalLRMax = diagonalLR
			}

		}
	
	}
	return diagonalLRMax
}

function rLDiagonal(){
	for(i=0; i<arrays.length-3; i++){
		for(j=0; j<arrays[i].length; j++){		
		// diagonalRL = 0	
			diagonalRL = arrays[i+3][j] * arrays[i+2][j+1] * arrays[i+1][j+2] * arrays[i][j+3]
			if(diagonalRL > diagonalRLMax){
				diagonalRLMax = diagonalRL
			}

		}
	}
	return diagonalRLMax
}
findTheGreatest = [horizontal(), vertical(), lRDiagonal(), rLDiagonal()]

winner = 0
for(i=0;i<4;i++){
	if(findTheGreatest[i] > winner){ winner = findTheGreatest[i]}
}

console.log(winner)






















