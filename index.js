function initFizzBuzz(num1, num2) {
  return function fizzBuzz46() {
    for (let i = 0; i <= 99; i += 1) {
      if (i % num1 === 0 && i % num2 === 0) {
        console.log(`fizzbuzz`);
      } else if (i % num1 === 0) {
        console.log(`fizz`);
      } else if (i % num2 === 0) {
        console.log(`buzz`);
      } else {
        console.log(i);
      }
    }
  };
}
const fizzBuzz46 = initFizzBuzz(4, 6);
fizzBuzz46();
