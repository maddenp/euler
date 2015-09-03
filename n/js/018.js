line_1=[75]
line_2=[95,64]
line_3=[17,47,82]
line_4=[18,35,87,10]
line_5=[20,04,82,47,65]
line_6=[19,01,23,75,03,34]
line_7=[88,02,77,73,07,63,67]
line_8=[99,65,04,28,06,16,70,92]
line_9=[41,41,26,56,83,40,80,70,33]
line_10=[41,48,72,33,47,32,37,16,94,29]
line_11=[53,71,44,65,25,43,91,52,97,51,14]
line_12=[70,11,33,28,77,73,17,78,39,68,17,57]
line_13=[91,71,52,38,17,14,91,43,58,50,27,29,48]
line_14=[63,66,04,68,89,53,67,30,73,16,69,87,40,31]
line_15=[04,62,98,27,23,09,70,98,73,93,38,53,60,04,23]

triangle = [line_1,line_2,line_3,line_4,line_5,line_6,line_7,line_8,line_9,line_10,line_11,line_12,line_13,line_14,line_15]

left=0
right=0
pathloc=0   //keep track of where we are in the tree
sum=0

for(i=0; i<triangle.length; i++){ 
	thisLine = triangle[i]

		left = thisLine[pathloc]
		right = !thisLine[pathloc+1] ? 0 : thisLine[pathloc+1] //never gonna reach the edge, so who cares

		 if(right > left){
			pathloc++	//won't be shifting to the left, if the left is larger the index stays the same
		}
		
		sum += thisLine[pathloc]

		thisLine[pathloc] += "*" //marking the path
		

	}
console.log(sum)
console.log(triangle)