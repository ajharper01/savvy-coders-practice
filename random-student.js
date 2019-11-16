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

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(students[getRandomInt(0, students.length - 1)]);

//console.log(math.ceiling(math.random() *100);
