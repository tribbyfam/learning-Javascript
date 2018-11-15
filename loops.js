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
// var john = {
//   bills: [124, 48, 268, 180, 42],
//   calcTips: function () {
//     this.tips = [];
//     this.finalValue = [];
//     for (i = 0; i < john.bills.length; i++) {
//       if (john.bills[i] < 50) {
//         this.tip = john.bills[i] * .2;
//         this.tips.push(this.tip);
//         this.finalValue.push(john.bills[i] + this.tip);
//       } else if (john.bills[i] >= 50 && john.bills[i] < 200) {
//         this.tip = john.bills[i] * .15;
//         this.tips.push(this.tip);
//         this.finalValue.push(john.bills[i] + this.tip);
//       } else {
//         this.tip = john.bills[i] * .1;
//         this.tips.push(this.tip);
//         this.finalValue.push(john.bills[i] + this.tip);
//       }
//     }
//     console.log(john.bills[2]);
//     console.log(tips);
//   }

// };
// john.calcTips();
// console.log(john);

var mark = {
  firstName: 'Mark',
  lastName: 'Smith',
  bills: [77, 375, 110, 45],
  calcMTips: function () {
    for (i = 0; i < this.bills[i]; i++) {
      this.tips = this.bills * 2;
      console.log(john.bills.tips)
    }
  }
  console.log(mark.calcMTips());
}