///////////////////////////////////////
// Lecture: Hoisting

// functions are hoiseted
calcAge(1966);

function calcAge(year) {
    console.log(2018 - year);
}


// expressions are not hoiseted
var retirement = function (year) {
    console.log(65 - (2018 - year))
}
retirement(1990);


// variables are not hoiseted also, they will be set to undefined
console.log(age);
var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age); // returns 65
}
foo();
console.log(age); // returns 23 because global variable




///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
    // console.log(a + b + c + d);
}



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

// calcAge(1985);

// function calcAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: "John",
    yearOfBirth: 1988,
    calcAge: function () {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
}
john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calcAge = john.calcAge;
mike.calcAge();