
var days = [31,28,31,30,31,30,31,31,30,31,30,31]
var total = 0
var whatDayIsIt = 0
for(y=1900; y<=2000; y++){
	if(y%4==0){
		days[1] = 29
	}
	else{
		days[1] = 28
	}
	for(i=0; i < days.length; i++){ 
		for(d=1; d<=days[i]; d++){
			whatDayIsIt++
			if(d==1 && whatDayIsIt==7 && y>1900){
				total++
			}
			if(whatDayIsIt==7){
				whatDayIsIt=0
			}
		}
	}
}
console.log(total)
