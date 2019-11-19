const mySelf = `The Son`;

function initFamily(birthFather, birthMother, mySelf) {
  return {
    birthFather,
    birthMother,
    mySelfParam: mySelf,
    getBirthFather: () => `Ron Harper is my: ${this.birthFather}.`,
    //with arrow syntax the use of this.birthFather is useless
    //Do not use THIS in an ARROW SYNTAX
    getBirthMother: function() {
      return `Janice Johnson is my ${this.birthMother}.`
    },
    getMySelf: () =>
      `They made me, ${mySelfParam}.`
  };
}
const myFamily = initFamily("father","mother","son");

console.log(myFamily);

console.log(myFamily.getBirthFather());
console.log(myFamily.getBirthMother);
console.log(myFamily.getMySelf);
//THIS IS WHAT YOU DO NOT DO
