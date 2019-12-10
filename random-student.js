//It will be 3 simple problems (Array of primitives) one each for map(), reduce() and filter().

/**const fastFoodRestaurants =[{    name: "Burger King",
    comboOptions: 6,
    sides: "Fries", "Onion Rings",
    drinks: "Coke Products"
  },{name: "Taco Bell",
    comboOptions: 7,
    sides: "Nachos", "Cinnamon Twists",
    drinks: "Pepsi Products"
  },{name: "Mc Donalds",
    comboOptions: 8,
    sides: "Fries", "Apple Pie",
    drinks: "All Products"
  },{name: "Wendy's",
    comboOptions: 9,
    sides: "Fries", "Onion Rings",
    drinks: "Pepsi Products"
  },]
*/
//const strings = ["xBox1X","PS4","SegaGen","N64","switch","nintendoDS"];
//const numbers = [1, 2, 3, 4, 5, ,6 ,7 ,8 , 9, 10];
//const booleans = [false, true];

//function theBestSystem(best){
//  return strings.filter(best => best === "xBox1X" );
//}
//console.log(theBestSystem());
//const creator = strings.map(creator => `Microsoft made ${best}`);

//function xboxCreator(creator, sal) {
//  return names.map(name => `${sal} ${name}`);
//}

//console.log(addSalutation(names, "Mrs."));

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filterOdds(num) {
  return nums.filter(num => num % 2 === 1);
}
//console.log(filterOdds());

// TODO: Write a funtion that returns the sum of all the numbers in any ARRAY of NUMBERS.
function numberSummer(num) {
  return nums.reduce((accumulator, currentNum) => accumulator + currentNum);
  }
console.log(numberSummer());
// TODO: MAP over nums and triple each number.

console.log(nums.map(num => num * 3));

