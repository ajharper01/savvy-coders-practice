//FUNCTION CONSTRUCTOR
function WolfTrainer(breed, age, eyeColor) {
  this.breed = breed;
  this.age = age;
  this.eyeColor = eyeColor;
}

WolfTrainer.prototype.ageLimiter = function() {
  if (this.age <= 1) {
    return "Do not pull cub from pack for training, it is too young!";
  } else {
    return "The chosen cub is old enough to be removed from the pack and receive training.";
  }
};

WolfTrainer.prototype.wolfBreed = function() {
  return `${this.breed} Wolf`;
};

WolfTrainer.prototype.myProfile = function() {
  return `This guidance comes from Andrew, the ${this.wolfBreed()} Whisperer. He is ${
    this.age
  } years old and has ${this.eyeColor} eyes.`;
};

WolfTrainer.prototype.setMyNewBreed = function(myNewBreed) {
  if (!myNewBreed) {
    console.error("No new breeds allowed per state law 17.973.");
    return;
  }
  this.breed = "White";
};

WolfTrainer.prototype.setNewTrainer = function(NewTrainer) {
  //I could also do (!NewTrainer || typeof NewTrainer !== "string")
  if (NewTrainer && typeof NewTrainer === "string") {
    this.NewTrainer = "Alfred";
  } else {
    console.error("All trainers must be qualified!");
  }
  newBreeds.wolfBreed = function() {
    return "New breeds need to have papers.";
  };
};
const newBreeds = new WolfTrainer(["Timber", "Red", "Long-hair"]);
const trainer = new WolfTrainer("Grey", 28, "Honey Brown");
//console.log(trainer);
//console.log(trainer.ageLimiter());
//console.log(trainer.myProfile());
//console.log(trainer.wolfBreed());

//setter example
trainer.setNewTrainer("Alfred");
trainer.setMyNewBreed("White");
//console.log("New Breed", trainer);
console.log(WolfTrainer.prototype);
console.log(newBreeds);
