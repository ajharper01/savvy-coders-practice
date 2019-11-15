//function factorial -num * num -1 * num -2... all the way to num ===0
// 4*3*2*1 = 24
function factorial(num) {
  let ret = 1;
  for (let i = num; i >= 1; i -= 1) {
    ret *= i;
  }
  return ret;
}
console.log(factorial(4));
//counting backwards in a for loop.

function factorial(num) {
if (num === 0){
return 1;
}

return num * factorial(num-1);
};

console.log(factorial(4));

//FML I need to figure this out. Get a full understanding
//Your (if) statement is your way out of the loop when you want it to stop
