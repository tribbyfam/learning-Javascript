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