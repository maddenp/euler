var list = []
for(i=100; i<=999; i++){
	for(j=100; j<=999; j++){

		product = i*j
		
		var productString = product.toString()
		var length = productString.length
		var first = productString.substring(0,productString.length/2)
		var last = productString.substring(productString.length/2)

		if(first===last.split("").reverse().join("")){
			list.push(product)
		}
	}
}
console.log(list.sort()[list.length-1])

