//class WolfTrainer{
// constructor(name, age, eyeColor) {
////  this.name = name;
//this.age = age;
//this.eyeColor = eyeColor;
//}
//set NewTraits = function(myArray) {
// if (Array.isArray(myArray)) {
//  this.newTraits = myArray;
//} else {
//console.error("Andrew's Traits Not Loaded");
//}
//};
//const newTraits = [`Hair: Golden Brown`, `10 Fingers`, `10 Toes`, `Height: 69 Inches`, `Weight 190`];
class WolfTrainer {
  constructor(name, age, eyeColor) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
  }
  get traitsList() {
    return `Hello there, I am ${this.name}. Can you add this list of additional traits to my profile?  TRAITS LIST: ${this.myTraits}.`;
  }
  set traitsList(myArray) {
    if (Array.isArray(myArray)) {
      this.myTraits = myArray;
    } else {
      console.error("Andrew's Traits Not Loaded");
    }
  }
}
const me = new WolfTrainer("Andrew", 28, "Honey Brown");
const myTraits = [
  `Golden Brown Hair`,
  `10 Fingers`,
  `10 Toes`,
  `Height-69in`,
  `Weight-190lbs`
];
me.traitsList = [
  `Golden Brown Hair`,
  `10 Fingers`,
  `10 Toes`,
  `Height-69in`,
  `Weight-190lbs`
];
console.log(me.traitsList);
const clientRequest = `Wait...Please do not show my height and weight!`;
const item1 = 3,
  item2 = 4;
const removedItems = me.myTraits.splice(item1, item2);
console.log(clientRequest);
console.log(removedItems + ` have been removed. Show current traits...`);
console.log(me.myTraits);
