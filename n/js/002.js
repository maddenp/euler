function evenFibs(before, current, sum){
	if(before > 40000000 || current > 4000000){
		return sum;
	}
	else if(current % 2 == 0){
		return evenFibs(current, before + current, sum)
	}
	else{
		return evenFibs(current, before + current, sum += current)

	}
}

console.log(evenFibs(0, 1, 0))