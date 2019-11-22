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

//CLASS DOES NOT CHANGE THE FACT THAT WE ARE DOING PROTOTYPE OOP AND NOT CLASS-BASED OOP!
//We will use CLASS to implement function constructor prototypes

function dreamCenter(city, state) {
  this.city = city;
  this.state = state;
}

function dreamersLocation(city, state) {
  dreamCenter.call(this, city, state);
  this.collectionType = "Vocal Iterations of Visual Thought";
}

const locationData = new dreamersLocation("St. Louis", "Missouri");
console.log(locationData);
//^My inheritance example (polymorphism?) using call command

class DreamCatcher {
  constructor(type, meaning, exp, name, age) {
    this.type = type;
    this.meaning = meaning;
    this.exp = exp;
    this.name = name;
    this.age = age;
  }
  //^my classed function constructor we learnt in class last night
  get ageLimiter() {
    if (this.age < 18) {
      return "Sadly, you require parental permission to record your dreams here.";
    } else {
      return "Welcome Dreamer, stash your melon paintings here before they vanish. :v:, Team DreamCatcher";
      //^me creating an age limit on dreamers trying to set up an account younger than 18
    }
  }
  get aWelcomeMessage() {
    return `Here at the DreamCatcher repository you can store your dreams. No matter which type you have: ${this.type}.`;
  }
  //^my second getter trying to return a string with the types as the array that I declared below to be included in this welcome message
  set myMeaning(type) {
    if (this.type === dayDream) return this.meaning;
    //^me trying to set the individual types of dreams that i want to put in this project to their individual meanings - of which i have not added here yet because it is a lot of data
  }
  set addDreamer(newDreamer) {
    //^my second setter
    if (newDreamer) {
      this.name = newDreamer;
    } else {
      console.error(
        "Sorry, your parents named you something that at least one other dreamer is named, try again."
      );
      //an error message log that I probably messed up
    }
  }
}
const type = [
  ` dayDreams`,
  `lucidDreams`,
  `nightmareDreams`,
  `recurringDreams`,
  `healingDreams`,
  `propheticDreams`,
  `signalDreams`,
  `epicDreams`
];
//^An array of the different types of dreams to be added into the function constructor for the key this.type
const dreamer1 = new DreamCatcher(
  "dayDream",
  "dreaming during the day",
  "thought about my project and did this",
  "Andrew Harper",
  28
);
//^My instance of DreamCatcher
console.log(dreamer1.ageLimiter);
//logs my ageLimiter function through the new instance of my CLASS DreamCatcher dreamer1

class DreamerProfile extends DreamCatcher {
  constructor(type, meaning, exp, name, age) {
    super(name, age);
    this.dreamerId = 123;
  }
}
//^Assigns a new property or key to the class called dreamerId
console.log(dreamer1);
//prints my dreamer1 which are values i gave to the keys in the class (the parent)
console.log(DreamCatcher.aWelcomeMessage);
