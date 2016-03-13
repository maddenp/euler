function evenFibs(before, current, sum){
	if(current > 4000000){
		return sum;
	}

	return isEven(current)
		? evenFibs(current, moveAlong(before,current), sum)
		: evenFibs(current, moveAlong(before,current), sum += current)

	// else if(current % 2 == 0){
	// 	return evenFibs(current, before + current, sum)
	// }
	// else{
	// 	return evenFibs(current, before + current, sum += current)
	// }
}

function moveAlong(previous, current){
	return previous + current
}

function isEven(number){
	return number % 2 == 0
}

console.log(evenFibs(0, 1, 0))