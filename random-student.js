//Arrays [] have auto-incremented numerical keys AKA index---instead of {} named keys with strings
//Collections AKA Composite data types
//PRIMITIVES are DISCRETE data types

//const myArr = [];
//Array

//const myObj = {};
//Object

//myObj.name = "Andrew"; //dot notation
//myObj["age"] = 28; //bracket notation

//myArr[0] = "hello";

const students = [
  "Andrew",
  "Billy",
  "George",
  "Heather",
  "Madison",
  "Marque",
  "Martin",
  "Nikki",
  "Oscar",
  "RhondaLyn",
  "Sidney",
  "Tracie",
  "Wallat"
];

//To pull particular students out of the element above do this...

function getMs(namesArr) {
  const mNames = [];
  for (let i = 0; i < namesArr.length; i += 1) {
    if (namesArr[i].startsWith("M")) {
      mNames.push(namesArr[i]);
    }
  }

  return mNames;
}
console.log(getMs(students));
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(students[getRandomInt(0, students.length - 1)]);

//console.log(math.ceiling(math.random() *100);
