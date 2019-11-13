function doMath(x, y, operation){
  console.trace();
  return operation(x,y)}

function oepration(x, y){
  console.trace();

  return x + y;
}

console.log(doMath(operation));

function doMath(x, y, addition){
  console.trace();

  return addition(x,y)}

function add(x, y){
  console.trace();

  return x + y;
}

console.log(doMath(addition));

function doMath(x, y, subtract){
  console.trace();

  return subtract(x,y)}

function subtract(x, y){
  console.trace();

  return x - y;
}

console.log(doMath(subtract));


