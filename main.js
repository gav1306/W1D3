// problem 1

function checkNumber(num) {
  if (num % 2 === 0) {
    if (num < 15) {
      return "a";
    } else if (num > 15) {
      return "b";
    }
  } else {
    if (num < 10) {
      return "c";
    } else if (num > 10) {
      return "d";
    }
  }
}

function checkNumberShort(num) {
  const result =
    num % 2 === 0
      ? (num < 15 && "a") || (num > 15 && "b")
      : (num < 10 && "c") || (num > 10 && "d");
  return result;
}

console.log(checkNumber());

console.log(checkNumberShort());

// problem 2

const letters = ["Hi", "my", "name", "is", "Akash"];

let sentence = "";
for (let index = 0; index < letters.length; index++) {
  sentence = `${sentence} ${letters[index]}`;
  if (letters[index] === "Hi") {
    sentence = `${sentence},`;
  }
  if (letters[index] === "Akash") {
    sentence = `${sentence}.`;
  }
}
console.log(sentence);

// problem 3

let age = 20;
age = 100;
const place = "Delhi";
{
  let age = 30;
  age = 40;
  console.log("this is age one ===>", age); //since there is a variable named age in this block scope we get the output as 40.
  console.log("this is place ====>", place); //because there is not variable named place in this block, js engine searches into the outer scope and after finding it there prints "delhi" this is scope chain.
}

age = 60;
console.log("this is age two ===>", age); //although we see age has been reassigned in the outer as well as inner block scope but here it is shadowing the other variable to give output 60

// problem 4

function multiplication() {
  let result = 1;
  for (let i = 10; i <= 20; i++) {
    result = result * i;
  }
  return result;
}
console.log(multiplication());

function addition() {
  let result = 0;
  for (let i = 10; i <= 20; i++) {
    result = result + i;
  }
  return result;
}
console.log(addition());

//problem 5

function leapYearChecker(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return "yes";
  } else {
    return "no";
  }
}
console.log(leapYearChecker());

// problem 6

let side1 = 5;
let side2 = 6;
let side3 = 7;

function areaOfTriangle(side1, side2, side3) {
  const s = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  return area;
}

console.log(areaOfTriangle(5, 6, 7));

// problem 7

function Number(n) {
  if (typeof n !== "number") {
    return "not a number";
  }
  if ((n > 100 && n < 200) || (n > 400 && n < 500)) {
    return "true";
  } else {
    return "false";
  }
}
console.log(Number());

//problem 8

const numOne = 3;
const numTwo = 4;
const numThree = 5;

function biggestNum(numOne, numTwo, numThree) {
  let check = Math.max(numOne, numTwo, numThree);
  return check;
}
console.log(biggestNum(3, 4, 5));

// problem 9

function verifyNum(a, b) {
  if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
    return "true";
  } else {
    return "false";
  }
}

console.log(verifyNum());
