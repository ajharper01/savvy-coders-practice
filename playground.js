const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = nums.reduce((num, total) => (total += num));
console.log(sum);
//one line of code to add the array of number 1 through 10 using reduce
