var numberToFactor = 600851475143

for(i=2;i<=numberToFactor;i++){
    while(numberToFactor%i==0){
        console.log(i)
        numberToFactor/=i
    }
}