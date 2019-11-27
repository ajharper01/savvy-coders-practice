/*
class Dreamer {
  constructor(fname, lname, age, location, type) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.location = location;
    this.type = type;
  }

  get bio() {
    return `${this.location}`;
  }

  get sleepTime() {
    return `${this.hour} ${this.minutes}`;
  }
  get assignments() {
    let ret = `The current task list is as follows...`;
    for (let i = 0; i < this.workload.length; i += 1) {
      ret += `${this.workload[i]}`;
    }
    return ret;
  }

  get fullName() {
    return `${this.fname} ${this.lname}`;
  }
  set assignments(assignments) {
    this.workload = assignments;
  }
  set changeName(newDreamer) {
    if (newDreamer) {
      this.newName = newDreamer;
    } else {
      console.error(
        `Yo, momma and Yo daddy named you something common...Please Try Again!`
      );
    }
  }
}
/*
const p = new Dreamer(`Tina`, `Harper`, 21, `FarmTown`, `DayDreamer`);
console.log(p);
/*
class Employee extends Dreamer {
  constructor(fname, lname, age, location, type, empid) {
    super(fname, lname, age, location, type);
    this.id = empid;
  }

  get bio() {
    return "She does not like school!";
  }
}
/*
const emp = new Employee(
  "Duke",
  "Ellington",
  55,
  "Baton Rouge",
  "Recurring",
  "123"
);
console.log(emp);
/*
emp.assignments = [
  "Start Kanban ",
  "Ask Evan Cool Questions",
  " Fix ESLINT BS"
];
console.log(emp.assignments);
*/

//11-26-19 NOTES

//const myArr = new Array();
//myArr[0] = "hello";
//or you can do the below
//const myArr = [];

//consol.log(myArr instanceof Array); `is = to` console.log(Array.isArray(myArr));
//console.log(typeof myArr)

const numbers = [1, 2, 3];
const strings = ["hello", "it's me", "I was wondering..."];
const numbersAndStrings = numbers.concat(strings);
const updatedNumbersAndStrings = [];
//forEach needs to know what it should do for each element -callback fxn.
//number is similar to doing numbers[i] in our traditional "for" loop.
//arrow syntax DOES NOT have a THIS reference.
numbers.forEach(number=> {
  console.log(`The number is`, number);
});

strings.forEach(string => {
  console.log(`The string is`, string);
});

function updateNumbersAndStrings(ogArr, stringUpdate, numberUpdate, finalArr){
  const updatedNumbersAndStrings = [];

  ogArr.forEach(el=> {
  console.log("The current element is", el)
      if (typeof el === `string`) {
      updatedNumbersAndStrings.push((el+= stringUpdate)) ;
    } else {
      updatedNumbersAndStrings.push((el += numberUpdate));
    }
  });
    return updatedNumbersAndStrings;
}

console.log(updateNumbersAndStrings(numbersAndStrings, "if after all these years...", 573));
//same functionality using a for each from the last commit
