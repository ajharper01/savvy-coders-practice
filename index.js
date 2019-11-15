//Fizz Buzz
//If we pass a number that's divisible by both 5 and 3, log 'fizzbuzz'
//If it's only divisible by 3 log 'fizz'
//If it's only divisible by 5 log 'buzz'
//If it's not divisible by 5 or 3 log the number.
//loop over the numbers from 1 to 99.

function fizzBuzz() {
  for (let i = 0; i <= 99; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`fizzbuzz`);
    } else if (i % 5 === 0) {
      console.log(`buzz`);
    } else if (i % 3 === 0) {
      console.log(`fizz`);
    } else {
      console.log(i);
    }
  }
}
console.log(fizzBuzz());
