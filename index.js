//HW6 Solution

function WolfTrainer(name, age, eyeColor) {
  this.name = name;
  this.age = age;
  this.eyeColor = eyeColor;
}

const newTraits = [
  `Hair: Golden Brown`,
  `10 Fingers`,
  `10 Toes`,
  `Height: 69 Inches`,
  `Weight 190`
];

WolfTrainer.prototype.setNewTraits = function(myArray) {
  if (Array.isArray(myArray)) {
    this.newTraits = myArray;
  } else {
    console.error("Andrew's Traits Not Loaded");
  }
};
//Here is my Loop
for (let i = 0; i <= newTraits.length; i += 1) {
  console.log(newTraits[i]);
}
const myButStatement = `I do not want the terminal knowing my weight, therefor, you must pop it.`;
newTraits.pop();
console.log(myButStatement);
console.log(newTraits);
console.log(WolfTrainer.newTraits);
