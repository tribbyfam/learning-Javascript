var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1989,
  family: ['Jane', "Mark", 'Emily', 'Peter'],
  job: 'teacher',
  isMarried: false
};
console.log(john.firstName);
console.log(john.family[3]);
console.log(john.job);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
console.log(john.job)

john.isMarried = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane.birthYear = 1991;
jane['job'] = 'uber driver';
console.log(jane);

//objects and methods
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1987,
  family: ['Jane', "Mark", 'Emily', 'Peter'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {
    // return 2018 - this.birthYear;
    this.age = 2018 - this.birthYear; // (see below for console otput OR)
  }
};

// console.log(john.calcAge());
// john.age = john.calcAge();
//OR
john.calcAge();
console.log(john)

//coding challenge 4
var john = {
  firstName: 'John',
  lastName: 'Smith',
  putFullName: function () {
    this.fullName = this.firstName + ' ' + this.lastName;
  },
  mass: 100,
  height: 2.8,
  calcBMI: function () {
    this.bmi = this.mass / this.height ^ 2;
    return this.bmi;
  }
};
console.log(john);

var mark = {
  firstName: 'Mark',
  lastName: 'Smith',
  putFullName: function () {
    this.fullName = this.firstName + ' ' + this.lastName;
  },
  mass: 99,
  height: 2.1,
  calcBMI: function () {
    this.bmi = this.mass / this.height ^ 2;
    return this.bmi
  }
};
john.calcBMI();
john.putFullName();
mark.calcBMI();
mark.putFullName();
console.log(mark);

if (john.bmi > mark.bmi) {
  console.log(john.fullName + "'s BMI of " + john.bmi + " is greater than " + mark.fullName + "'s BMI of " + mark.bmi);
} else if (john.bmi === mark.bmi) {
  console.log(john.fullName + "'s BMI of " + john.bmi + " is equal to " + mark.fullName + "'s BMI of " + mark.bmi);
} else {
  console.log(mark.fullName + "'s BMI of " + mark.bmi + " is greater than " + john.fullName + "'s BMI of " + john.bmi);
};

// OR 
if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + "'s BMI of " + john.bmi + " is greater than " + mark.fullName + "'s BMI of " + mark.bmi);
} else if (john.bmi === mark.bmi) {
  console.log(john.fullName + "'s BMI of " + john.bmi + " is equal to " + mark.fullName + "'s BMI of " + mark.bmi);
} else {
  console.log(mark.fullName + "'s BMI of " + mark.bmi + " is greater than " + john.fullName + "'s BMI of " + john.bmi);
};