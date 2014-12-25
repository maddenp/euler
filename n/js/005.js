function doStuff(i){
	var j=1;
	while(i%j==0){
		j++
	}
	return j>=20
}

i=1
while(doStuff(i)==false){
	i++
}
console.log("SOLVED " + i)
