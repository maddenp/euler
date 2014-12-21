before = 0;
current = 1;
after = 0;
sumOfEvens = 0;
foMillion = 4000000;

while((before<foMillion) && (after<foMillion)){
    after = current + before;
    before = current;
    current = after;
    if(after%2==0){
        sumOfEvens = sumOfEvens + current;
        
    }
}
console.log("Sum of evens: " + sumOfEvens);