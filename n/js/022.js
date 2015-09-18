
var valuemap = {"\"":0,"A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,"I":9,"J":10,"K":11,"L":12,"M":13,"N":14,
"O":15,"P":16,"Q":17,"R":18,"S":19, "T":20,"U":21,"V":22,"W":23,"X":24,"Y":25,"Z":26}

fs = require('fs');
fs.readFile('p022_names.txt', 'utf8', function (err,data){

	var names = data.split(",").sort()
	var totalNameScore = 0
	for(n=0;n<names.length;n++){	
		var currentScore = 0
		var nameCharacters = names[n].split('')
		for(c=0;c<nameCharacters.length; c++){
			currentScore += valuemap[nameCharacters[c]]			
		}
		totalNameScore += (currentScore * (n+1))

	}
	console.log(totalNameScore)

});

