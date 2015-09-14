var total = 0

for(var a=0; a<10000; a++){
  b = d(a)
  x = d(b)
  if(x==a && b != x){
    total+=a
  } 
}

function d(x){
  sum=0
  for(i=0; i<x; i++){
    if(x%i==0){
      sum += i
    }
  } 
  return sum
}

console.log(total)
