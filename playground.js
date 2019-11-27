const fruits = ['apple', 'kiwi', 'pineapple', 'jackfruit'];

const moreFruits = ['dragonfruit', 'pineapple', 'mango', 'guava', 'strawberry'];
// concat joins arrays together
const allTheFruits = fruits.concat(moreFruits);
console.log('allTheFruits is', allTheFruits);

//actually removing the first fruit and explaination
const removeFirst = fruits.shift(moreFruits);
console.log('take away the first fruit', fruits);
console.log('moreFruits is still', moreFruits);

//array after I remove the first fruit apple
console.log(removeFirst);

//add to begin of array
const giveFirst = fruits.unshift('orange');
//new array with orange as the first element
console.log(fruits);

//example of shift and unshift
