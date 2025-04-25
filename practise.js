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

