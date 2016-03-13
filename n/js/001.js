function multiplesOfThreeAndFive(number, sum){
	if(number == 0){
		return sum;
	}
	else if(number % 3 == 0 || number % 5 == 0){
		return multiplesOfThreeAndFive(number-1, sum += number)
	}
	else return multiplesOfThreeAndFive(number-1, sum)

}

console.log(multiplesOfThreeAndFive(999, 0))
