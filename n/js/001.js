function multiplesOfThreeAndFive(number, sum){
	if(number == 0){
		return sum;
	}
	else return isAMultipleOfThreeOrFive(number) 
		? multiplesOfThreeAndFive(decrement(number), sum+=number)
		: multiplesOfThreeAndFive(decrement(number), sum)
}

function decrement(number){
	return number-=1
}

function isAMultipleOfThreeOrFive(number){
	return number % 3 == 0 || number % 5 == 0
}

console.log(multiplesOfThreeAndFive(999, 0))
