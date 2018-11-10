/************************
 * Data types
 */
/*
var firstName = 'Anna';
console.log(firstName);

var lastName = "Trebby";
var age = 33;

var fullAge = true;
console.log(fullAge);
*/

/************************
 * Data mutation and type coercion(conversion from one type to the other)
 */

var firstName = 'Anna';
var age = 33;

//type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver';

// alert(firstName + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried);

// var lastName = prompt('What is her last Name?');
// console.log(firstName + ' ' + lastName);

/************************
 * operators
 */

var year, yearAnna, yearMark
now = 2018;
ageAnna = 33;
ageMark = 28;

yearAnna = now - 33;
yearMark = now - 28;

console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators
var annaOlder = ageAnna > ageMark;
console.log(annaOlder);

//typeof operator
console.log(typeof annaOlder);
console.log(typeof ageMark);
console.log(typeof 'Mark is older');
var x;
console.log(typeof x);

//operator precedence
var now = 2018;
var yearJohn = 1998;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge; //true
//look on https://codingheroes.io/resources

console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8*4-6 // 32-6 //26
console.log(x, y);

x = x * 2;
x *= 2;
console.log(x);
x = x + 1;
x++; //or x--;
console.log(x);


//coding challenge 1
var heightMark = 2.1; //meters
var heightJohn = 2.8; //meters

var massMark = 99; //kg
var massJohn = 90; //kg

var bmiMark = massMark / heightMark ^ 2;
var bmiJohn = massJohn / heightJohn ^ 2;
console.log(bmiMark, bmiJohn);

var bmiBigger = bmiMark > bmiJohn;
// console.log("Is Mark's BMI bigger than John's? " + bmiBigger);
if (bmiMark > bmiJohn) {
  console.log('Mark\'s BMI is higher than John\'s');
} else {
  console.log('John\'s BMI is higher than Mark\'s');
};

//if / else statements
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will marry soon :)');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will marry soon :)');
}

//boolean logic
var firstName = "John";
var age = 26;

if (age < 13) {
  console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) { //between 13 and 20  age >=13 or 
  console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man');
} else {
  console.log(firstName + ' is a man');
}