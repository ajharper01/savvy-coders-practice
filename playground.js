//reduce
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//TODO: Use reduce to sum up these numbers.
const sumOfNums = nums.reduce((total, currentNum) => total + currentNum);

console.log(sumOfNums);

//TODO: Write a fxn. that takes an Array of Numbers and returns ... the average.

function getAvg(nums) {
  return nums.reduce((total, num) => total + num) / nums.length;
}

console.log(getAvg(nums));
