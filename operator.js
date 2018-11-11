/************
 * the ternary operator and switch
 */

var firstName = "John";
var age = 44;

//ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if (age >= 18){
//   var drink = 'beer';
// } else {
//   var drink = 'juice';
// } //same as above


//switch statement
var job = 'cop';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber.');
    break;
  case 'designer':
    console.log(firstName + ' designes clothes.');
    break;
  default:
    console.log(firstName + ' does something else.');
}


switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
    break;
}

//truthy and falsy values
// falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

var height;
height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable is NOT defined');
}

//challenge 2

teamJ1 = 93;
teamJ2 = 120;
teamJ3 = 103;
teamM1 = 99;
teamM2 = 94;
teamM3 = 123;
teamMary = (97, 105, 134);

averageTeamJ = (teamJ1 + teamJ2 + teamJ3) / 3;
averageTeamM = (teamM1 + teamM2 + teamM3) / 3;
averageTeamMary = (97 + 105 + 114) / 3;
console.log(averageTeamJ, averageTeamM, averageTeamMary)

if (averageTeamJ > averageTeamM && averageTeamJ > averageTeamMary) {
  console.log("John's team average is higher with" + averageTeamJ + " points")
} else if (averageTeamJ === averageTeamM && averageTeamJ === averageTeamMary) {
  console.log("The averages are the same")
} else if (averageTeamM > averageTeamMary && averageTeamM > averageTeamJ) {
  console.log("Mike's team average is higher with" + averageTeamJ + " points")
} else if (averageTeamMary > averageTeamJ && averageTeamMary > averageTeamM) {
  console.log("Mary's team average is higher")
} else if (averageTeamMary == averageTeamJ) {
  console.log("Mary's and John's team averages are the same and higher than Mikes")
} else if (averageTeamMary == averageTeamM) {
  console.log("Mary's and Mike's team averages are the same and higher than John's")
};