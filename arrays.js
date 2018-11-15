/***********
 * arrays
 */

// var names = ["John", "Mark", "Anna", "Jane"];
// var yeras = new Array(1990, 1987, 1974, 1955);

// console.log(names[2]);
// console.log(names.length);

// names[1] = "Ben";
// names[names.length] = "Fish";
// console.log(names);

// //different data types
// var john = ["John", "Smith", 1990, "designer", false];
// john.push("blue");
// john.unshift("Mr.");
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner =
//   john.indexOf("designer") === -1
//     ? "John is not a designer"
//     : "John is a designer";
// console.log(isDesigner);

//challenge 2 my solution
var bills = [124, 48, 268];

for (i = 0; i < bills.length; i++) {
  if (bills[i] < 50) {
    var tip = bills[i] * 0.2;
    console.log(tip);
    console.log("Bill is " + bills[i] + " and tip is " + tip);
  } else if (bills[i] >= 50 < 200) {
    var tip = bills[i] * 0.15;
    console.log(tip);
    console.log("Bill is " + bills[i] + " and tip is " + tip);
  } else {
    var tip = bills[i] * 0.1;
    console.log(tip);
    console.log("Bill is " + bills[i] + " and tip is " + tip);
  }
}
// challenge 2 his solution

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

console.log(tipCalculator(268));
var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValue = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, finalValue);
