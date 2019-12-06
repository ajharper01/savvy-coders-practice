//function composition
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add1(n) {
  return n + 1;
}

function double(n) {
  return n * 2;
}

//TODO: Add 1 and double each num inside of nums only using the first 2 fxns
console.log(nums.map(num => add1(num)).map(num => double(num)));

//TODO: FILTER out all odd numbers and then repeat
const results = nums
  .filter(num => num % 2 === 1)
  .map(num => add1(num))
  .map(num => double(num));

console.log(results);
//functional programming employs function composition with pure functions
