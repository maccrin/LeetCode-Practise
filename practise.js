function opposite(number) {
     return -1*number
  }

  console.log(opposite(1));
  console.log(opposite(14));
  console.log(opposite(-34));

  //https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript

  function numbersOfLetters(int) {
    const hash = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let text= 'm'.repeat(int);
    let result =[];
do{
text=(text.length+'').split('').map(num=>hash[num]).join('');
result.push(text);
console.log(text)
}while(text!==hash[text.length])
 return result
  }

  console.log(numbersOfLetters(60));

//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers){
  const phNumber= numbers.join('').replace(/^(.{3})(.{3})(.{4}$)/, '($1) $2-$3');
 return phNumber

//2nd method 
 var format = "(xxx) xxx-xxxx";
  
 for(var i = 0; i < numbers.length; i++)
 {
   format = format.replace('x', numbers[i]);
 }
 
 return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


//valid ph number
function validPhoneNumber(phoneNumber){
const regex= /^\((\d{3}\))\s(\d{3})(-\d{4})$/
  return regex.test(phoneNumber)
}

console.log(validPhoneNumber("(123) 456-7890"));
console.log(validPhoneNumber("(1111)555 2345"));
console.log(validPhoneNumber("(098) 123 4567"));

//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  const zeros=arr.filter(num=>num===0);
  const nonZeros=arr.filter(num=>num!==0);
 return nonZeros.concat(zeros);
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([1,2,0,1,3,0,0,5,6]));