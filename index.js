//FUNCTION CONSTRUCTOR
//function WolfTrainer(breed, age, eyeColor) {
// this.breed = breed;
//this.age = age;
//this.eyeColor = eyeColor;
//}

//WolfTrainer.prototype.ageLimiter = function() {
//if (this.age <= 1) {
//return "Do not pull cub from pack for training, it is too young!";
//} else {
// return "The chosen cub is old enough to be removed from the pack and receive training.";
//}
//};

//WolfTrainer.prototype.wolfBreed = function() {
//return `${this.breed} Wolf`;
//};

//WolfTrainer.prototype.myProfile = function() {
//return `This guidance comes from Andrew, the ${this.wolfBreed()} Whisperer. He is ${
//this.age
//} years old and has ${this.eyeColor} eyes.`;
//};

//WolfTrainer.prototype.setMyNewBreed = function(myNewBreed) {
//if (!myNewBreed) {
//console.error("No new breeds allowed per state law 17.973.");
//return;
//}
//this.breed = "White";
//};

//WolfTrainer.prototype.setNewTrainer = function(NewTrainer) {
//if (NewTrainer && typeof NewTrainer === "string") {
//  this.NewTrainer = "Alfred";
//} else {
//  console.error("All trainers must be qualified!");
//}
//newBreeds.wolfBreed = function() {
//  return "New breeds need to have papers.";
//};
//};
//const newBreeds = new WolfTrainer(["Timber", "Red", "Long-hair"]);
//const trainer = new WolfTrainer("Grey", 28, "Honey Brown");

//trainer.setNewTrainer("Alfred");
//trainer.setMyNewBreed("White");

//const newTraits = [
//`Hair: Golden Brown`,
//`10 Fingers`,
//`10 Toes`,
//`Height: 69 Inches`,
//`Weight 190`
//];

//WolfTrainer.prototype.setNewTraits = function(myArray) {
//if (Array.isArray(myArray)) {
//  this.newTraits = myArray;
//} else {
// console.error("Andrew's Traits Not Loaded");
//}
//};

function trainingCenter(city, state) {
  this.city = city;
  this.state = state;
}

function trainingLocation(city, state) {
  trainingCenter.call(this, city, state);
  this.trainingType = "Basic Commands";
}

const locationData = new trainingLocation("St. Louis", "Missouri");
console.log(locationData);

//CLASS DOES NOT CHANGE THE FACT THAT WE ARE DOING PROTOTYPE OOP AND NOT CLASS-BASED OOP!
//We will use CLASS to implement function constructor prototypes

class WolfTrainer {
  constructor(breed, age, eyeColor) {
    this.breed = breed;
    this.age = age;
    this.eyeColor = eyeColor;
  }

  get ageLimiter() {
    if (this.age <= 1) {
      return "Do not pull cub from pack for training, it is too young!";
    } else {
      return "The chosen cub is old enough to be removed from the pack and receive training.";
    }
  }
  get wolfBreed() {
    return `${this.breed} Wolf`;
  }
  get myProfile() {
    return `This guidance comes from Andrew, the ${this.wolfBreed()} Whisperer. He is ${
      this.age
    } years old and has ${this.eyeColor} eyes.`;
  }
  set changeBreed(newBreed) {
    if (newBreed) {
      this.breed = newBreed;
    } else {
      console.error("This is not a Black Canadian Wolf");
    }
  }
}
const newTraits = [
  `Hair: Golden Brown`,
  `10 Fingers`,
  `10 Toes`,
  `Height: 69 Inches`,
  `Weight 190`
];

const trainer = new WolfTrainer("Grey", 28, "Honey Brown");
const trainee = new WolfTrainer("Blue", 2, "yellow");
console.log(trainer.ageLimiter);
console.log(trainee);
console.log((trainee.changeBreed = "black"));
console.log(trainee);
