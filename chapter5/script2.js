// lecture Life
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
};
game();
*/

// same as above different way 'ify'
/*
(function () {
  var score = Math.random() * 10;
  console.log(score);
  console.log(score >= 5);
})();
// console.log(score);

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

// lecture CLOSURES

function retirement(retirementAge) {
  var a = " year left until retirement."
  return function (birthYear) {
    var age = 2019 - birthYear;
    console.log((retirementAge - age) + a);
  };
}
var retirementNormal = retirement(67);
var retirementEarly = retirement(65);

retirementEarly(1974);
retirement(67)(1974);
retirementNormal(1969);

// interview questions with closure

function interviewQuestion(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can you explain UX design?');
    } else if (job === 'teacher') {
      console.log("What subject do you teach, " + name + '?');
    } else {
      console.log('Hello ' + name + 'what do you do?');
    }
  }
}
var interviewQuestionDesigner = interviewQuestion('designer');
var interviewQuestionTeacher = interviewQuestion('teacher');

interviewQuestion('designer')('Anna');
interviewQuestion('teacher')('Anna');
interviewQuestionDesigner('Peter');
interviewQuestionTeacher('Peter');


// Bind, call and apply 
var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
}

var emily = {
  name: 'Emily',
  age: 28,
  job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon') //method borrowing or call method

var johnFriendly = john.presentation.bind(john, 'friendly'); //need to create var as it copies the function and you need to store it. 
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
*/


var years = [1990, 1966, 1988, 2007, 2000, 2004];

function arrCalculator(arr, fn) {
  var arrRes = [];
  for (i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrCalculator(years, calculateAge);
var fullJapan = arrCalculator(ages, isFullAge.bind(this, 20));
var fullUzbekistan = arrCalculator(ages, isFullAge.bind(this, 17));

console.log(fullJapan);
console.log(fullUzbekistan);
console.log(ages);