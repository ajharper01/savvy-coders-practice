(1.) Which of the following are valid arrays (Answer all that apply)

const A = ["Harder", "Better", "Faster", "Stronger"];
const B = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const C = [
  "Urban Chestnut",
  2009,
  "4Hands",
  2011,
  "Rockwell",
  2018
];
const D = [false, 0, "F", true, 1, "T"];

(1-BONUS.) This a valid Array? true / false
//true

const E = [
  true,
  "HINT: arrays can contain any data type.",
  undefined,
  function () { alert("Hello World"); },
  null,
  { name: "Porky Pig", phrase: "That's All Folks!" },
];

//All

(2.) What is the value of directions when it is logged?

const directions = ["North", "East", "South", "West"];
directions.pop();
//removes west
directions.shift();
//removes north
directions.push("Left");
//puts left at the end
directions.unshift("Up");
//puts up at the beginning
console.log(directions);

// Up East South Left

(3.) What is the value of allTraits when it is logged?
//both characterTraits and betterTraits in 1 array
(3-B.) What is the value of characterTraits when it is logged?
//"Trustworthy","Loyal","Helpful","Friendly","Courteous" NO MUTATION
(3-C.) Why are these the same OR Why are these different?
//they are two separate arrays one of which is a concatenation of characterTraits and betterTraits

const characterTraits = [
  "Trustworthy",
  "Loyal",
  "Helpful",
  "Friendly",
  "Courteous"
];

const betterTraits = [
  "honest and fair",
  "friendly and helpful",
  "considerate and caring",
  "courageous and strong"
];

const allTraits = characterTraits.concat(betterTraits);
console.log(characterTraits, allTraits);

(4.) Fill in the blanks to make the code work:

const pets = [
  'Dog',
  'Cat',
  'Bear',
  'Bearded Dragon',
  'Frilled Dragon',
  'Komodo Dragon',
  'Bunny',
  'Bird'
];

const dragons = pets.slice( _____ , _____ );
//3,6
console.log(dragons);
// dragons should return ['Bearded Dragon', 'Frilled Dragon', 'Komodo Dragon']

(4-B.) Log the name of your favorite pet by accessing it from the array

const pets = [
  'Dog',
  'Cat',
  'Bear',
  'Bearded Dragon',
  'Frilled Dragon',
  'Komodo Dragon',
  'Bunny',
  'Bird'
];
console.log(`My favorite pet is a ${ _____ }`);
//PETS[2] FOR BEAR

(5.) What are the logged values?

const characters = [" ", "A", "B", "C", "D", "E", "F", "G"];

const BIndex = characters.indexOf("B");
//indexOf what ever it is
const FIndex = characters.indexOf("F");
//indexOf what ever it is
const hasPercentSign = characters.includes("%");
//boolean true or false
const mysteryValue = characters.push("H");
//returns the new length of the array
console.log(BIndex, FIndex, hasPercentSign, mysteryValue);
