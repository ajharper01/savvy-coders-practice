//Pass by value

let x = 3;
let y = x;

function add1(n) {
  return n + 1;
}
//ANY Primitives CANNOT by mutated.
//ANY Primitives are passed by value.
//x THROWS AWAY it's '3' and gets a whole new value of <4> through the reassignment given by function;
x = add1(x);
console.log("x after add1 is", x);
console.log(y);

//y will still hold a value of 3 unless the value of x changes at the initial assignment point
//if the value of x changes throughout a function the value of y will never change.

//Pass by reference exampled below
const me = {
  name: "Andrew"
};

const me2 = me;

function nameChanger(obj, newName) {
  obj.name = newName;
}
// I pass in 'me' to nameChanger
nameChanger(me, "Fred");

console.log(me);
console.log(me2);
//now both me and me2's names are Fred

//const me2=me makes the object me and me2 tied together- everything that happens to me happens to me2
//OBJECTS ARE PASS BY REFERENCE
