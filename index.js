function myPow(num, exp) {
  let ret = num;

  for (let i = 1; i < exp; i += 1) {
    ret *= num;
  }
  return ret;
}
console.log(myPow(2, 3));

//num can be any number you want to start with to multiply. The exp is for exponents, how many times you want the num to be multiplied by. This is a for Loop. be sure to call the function with Console.log
