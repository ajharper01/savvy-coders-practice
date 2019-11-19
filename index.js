function initFizzBuzz(num1, num2) {
  return function fizzBuzz46() {
    for (let i = 0; i <= 99; i += 1) {
      //you could also do[if (i % (num1 * num2) = = = 0)]
      if (i % num1 === 0 && i % num2 === 0) {
        console.log(`${i} - fizzbuzz`);
        //you could also (!(i% num1)) if you choose to
      } else if (i % num1 === 0) {
        console.log(`${i} - fizz`);
      } else if (i % num2 === 0) {
        console.log(`${i} - buzz`);
      } else {
        console.log(i);
      }
    }
  };
}
const fizzBuzz46 = initFizzBuzz(4, 6);
fizzBuzz46();

const bob = [];
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(bob)); //true
