/***********
 * arrays
 */

var names = ['John', 'Mark', 'Anna', 'Jane'];
var yeras = new Array(1990, 1987, 1974, 1955);

console.log(names[2]);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Fish';
console.log(names);

//different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);