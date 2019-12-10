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
