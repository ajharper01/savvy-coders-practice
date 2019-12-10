const strs = [
  "hello",
  "something",
  3,
  "boolean",
  "hello",
  "hello",
  "hell",
  "world",
  "hello"
];

function doesHelloExist(strings) {
  return Boolean(
    strings
      .map(string => {
        return string === "hello";
      })
      .filter(bool => {
        return bool;
      }).length
  );
}
//The above is includes coded out.

console.log(doesHelloExist(strs));
console.log(strs.includes("hello"));

//The below tells me how many are in the array
function countOccurences(someArr, target) {
  return strs.filter(element => element === target).length;
}
console.log(countOccurences(strs, "hello"));
