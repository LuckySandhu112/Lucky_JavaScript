/***********************
  1. Driving Age Check
************************/
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} years to drive.`);
}

/*********************************
  2. Compare myAge and yourAge
**********************************/
let myAge = 25; // assume my age
let yourAge = Number(prompt("Enter your age:"));

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
  console.log("We are the same age.");
}

/*********************************
  3. Compare a and b (if...else)
**********************************/
let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

/*********************************
  4. Compare a and b (ternary)
**********************************/
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

/*********************************
  5. Even or Odd Number Check
**********************************/
let number = Number(prompt("Enter a number:"));

if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}
