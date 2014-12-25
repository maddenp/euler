top:
for(i=1; true; i++){
	j = 1
	while((i%j)==0){
		j++
		if(j>=20){
			console.log("SUCCESS " + i)
			break top;
		}
	}
}
//oh the horror, the horror.

