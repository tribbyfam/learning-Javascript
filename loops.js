/********
 * loops and iterations
 */

//for loop
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// };
// for (var i = 1; i <= 20; i += 2) {
//   console.log(i);
// };

// var john = ['John', 'Smith', 1989, 'designer', false];
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// //while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// //continue and break statements
// var john = ['John', 'Smith', 1989, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }


// //looping backwards
// var john = ['John', 'Smith', 1989, 'designer', false, 'blue'];
// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }
// for (var i = john.length - 1; i >= 0; i--) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// };


//Challenge 5
var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValue = [];
    for (i = 0; i < this.bills.length; i++) {
      // determine percentage rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      this.tips[i] = bill * percentage;
      this.finalValue[i] = bill + bill * percentage;
    }
  }
};

var mark = {
  fullName: 'Mark Smith',
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValue = [];
    for (i = 0; i < this.bills.length; i++) {
      // determine percentage rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }
      this.tips[i] = bill * percentage;
      this.finalValue[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

function calcAvergBill(finalValue) {
  var sum = 0;
  for (i = 0; i < finalValue.length; i++) {
    sum = sum + finalValue[i];
  }
  return sum / finalValue.length;
}

// all the calculations

mark.calcTips();
john.calcTips();

john.avergTips = calcAverage(john.tips);
mark.avergTips = calcAverage(mark.tips);

john.avergBills = calcAvergBill(john.finalValue);
mark.avergBills = calcAvergBill(mark.finalValue);

console.log(john, mark);

if (john.avergTips > mark.avergTips) {
  console.log(john.fullName + "'s family pays higher tips, with an average tips " + john.avergTips);
} else if (mark.avergTips > john.avergTips) {
  console.log(mark.fullName + "'s family pays higher tips, with an average tips " + mark.avergTips);
}