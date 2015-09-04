
single = {1:3, 2:3, 3:5, 4:4, 5:4, 6:3, 7:5, 8:5, 9:4}
strangies = {10:3, 11:6, 12:6, 13:8, 14:8, 15:7, 16:7, 17:9, 18:8, 19:8}
deci = {20:6, 30:6, 40:5, 50:5, 60:5, 70:7, 80:6, 90:6}
hundred = 7
thousand = 8
and = 3

var oneToNinetyNine = oneToNineTeen(single, strangies) + twentyToNinetyNine(deci)
console.log(hundreds() + oneToNinetyNine)


function hundreds(){
	sum = 0 

// 1-99

// 100-1000

	for(i=1;i<10;i++){ 
		sum += single[i] + hundred 

		for(s in single){
			sum += single[i] + hundred + and + single[s]
		}

		for(x in strangies){
			sum += single[i] + hundred + and + strangies[x]
		}

		for(d in deci){ 
			sum += single[i] + hundred + and + deci[d]
			for(s in single){ 
				sum += single[i] + hundred + and + deci[d] + single[s]

			}
		}
	} 
	sum += single[1] + thousand
	return sum
}


function twentyToNinetyNine(map){
	sum = 0
	for(s in map){ 
		sum += map[s] 
		for(x in single){ 
			sum += map[s] + single[x]
		}
	}
	return sum
}
function oneToNineTeen(singles, strangies){
	sum = 0 
	for(s in singles){
		sum += singles[s]
	}
	for(x in strangies){
		sum += strangies[x]
	}
	return sum
}
