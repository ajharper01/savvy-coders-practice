function foo() {
  console.trace();
  bar();
  console.trace();

  return "foo";
}

function bar() {
  console.trace();
  baz();
  console.trace();

  return "bar";
}

function baz() {
  console.trace();

  return "baz";
}

console.log(foo());

//FIRST IN LAST OUT on the STACK
//While the CALL STACK is engaged Javascript can not do anything else (SINGLE THREADED)
