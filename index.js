function doMath(x, y, mathFxn){
  return mathFxn(x,y)}

function add(x, y){
  return x + y;
}

console.log(doMath(add));