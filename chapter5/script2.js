// lecture Life
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
};
game();
*/

// same as above different way 'ify'

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