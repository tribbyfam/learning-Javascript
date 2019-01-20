/*
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job
};

Person.prototype.calculateAge = function () {
  console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Trebby';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1988, 'designer');
var mark = new Person('Mark', 1973, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(jane.lastName);
console.log(john.lastName);
console.log(mark.lastName);
*/


// Object.create

/*
var personProto = {
  calculateAge: function () {
    console.log(2018 - this.yearOfBirth);
  }
};

//one way of entering objects info
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1988;
john.job = 'teacher';

//second way of entering objects info
var jane = Object.create(personProto, {
  name: {
    value: 'Jane'
  },
  yearOfBirth: {
    value: 1969
  },
  job: {
    value: 'designer'
  }
});
*/

// Primitive vs objects

// primitive
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// functions
var age = 27;
var obj = {
  name: 'John',
  city: 'Lisbon'
};

function change(a, b) {
  a = 40;
  b.city = 'San Francisco';
}
change(age, obj);
console.log(age);
console.log(obj.city);
console.log(obj.name);

//Passing functions as arguments
var years = [1990, 1988, 1998, 2000, 2005];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.067 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);