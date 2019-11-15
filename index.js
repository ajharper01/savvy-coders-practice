function myPow(num, exp) {
  let ret = num;

  for (let i = 1; i < exp; i += 1) {
    ret *= num;
  }
  return ret;
}
console.log(myPow(2, 3));

//the above is a for loop example...num can be any number you want to start with to multiply. The exp is for exponents, how many times you want the num to be multiplied by. This is a for Loop. be sure to call the function with Console.log

function myPow(num, exp) {
if (exp === 0){
return 1;
}

return (num *= myPow(num, exp - 1));
};

console.log(myPow(2,3));

//this is the same thing just using recursion
