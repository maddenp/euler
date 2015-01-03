for(c=3; c<1000; c++){
	for(b=2; b<1000; b++){
		for(a=1; a<1000; a++){
			if((validateTriplet(a,b,c)==true) && a+b+c==1000){
				console.log(a*b*c)
				return;
			}
		}
	}
}

function validateTriplet(a,b,c){
	if(Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)){
		return true
	}
	return false
}