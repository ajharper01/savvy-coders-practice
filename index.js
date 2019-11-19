//FUNCTION CONSTRUCTOR
function WolfTrainer(breed, age, eyeColor) {
  this.breed = breed;
  this.age = age;
  this.eyeColor = eyeColor;
  this.ageLimiter = function() {
    if (this.age <= 1) {
      return "Do not pull cub from pack for training, it is too young!";
      }
        else{
          return "The chosen cub is old enough to be removed from the pack and receive training.";
        }
  };
  this.wolfBreed = function() {
    return `${this.breed} Wolf`;
  };
  this.myProfile = function() {
    return `This guidance comes from Andrew, the ${this.wolfBreed()} Whisperer. He is ${this.age} years old and has ${this.eyeColor} eyes.`;
  };
}
const trainer = new WolfTrainer("Grey", 28, "Honey Brown");
console.log(trainer);
console.log(trainer.ageLimiter());
console.log(trainer.myProfile());
console.log(trainer.wolfBreed());
