number = [1]
sum = 0

function stowDigit(count, carry, count){
	for(j = 0; j < count; j++)
    {
        digit = number[j]
        digit = 2 * digit + carry
        if(digit > 9)
        {
            digit -= 10
            carry = 1
        }
        else
        {
            carry = 0
        }
        number[j] = digit
    }
}

for( i=0; i<1000; i++)
{
    carry = 0
    count = number.length + 1

    stowDigit(count, carry, count)
}

for(i = 0; i < 1000; i++) sum += number[i]


console.log(sum)