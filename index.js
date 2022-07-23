// Import stylesheets
import './style.css';

// *************************************************
// Looping Through an Array in JavaScript
// *************************************************

//create an array
const arr1 = ['Mayan', 23, 'Los Angeles', 'Software engineer'];

// Using `while {...}` loop
// ***********************

let i = 0;
while (i < arr1.length) {
  let item = arr1[i];
  console.log(item);
  i++;
}

console.log(i);
//Mayan 23 Los Angeles Software engineer

// Using `do {...} while` loop
// ***********************
let k = 0;
let myString = '';

do {
  let item = arr1[k];
  myString += item + ' ';
  ++k;
} while (k < arr1.length);

console.log(myString);
//Mayan 23 Los Angeles Software engineer

//Using `for (){...}` loop
// ***********************

for (let i = 0; i < arr1.length; i++) {
  console.log(`${i} : ${arr1[i]}`);
}
/*
0 : Mayan
1 : 23
2 : Los Angeles
3 : Software engineer
*/

//Using `for ... in` loop
// **********************

for (let index in arr1) {
  console.log(`arr1[${index}] : ${arr1[index]}`);
}
/* 
arr1[0] : Mayan
arr1[1] : 23
arr1[2] : Los Angeles
arr1[3] : Software engineer
*/

//Using `for ... of` loop
// **********************

for (let arr of arr1) {
  console.log(`item : ${arr}`);
}
/*
item : Mayan
item : 23
item : Los Angeles
item : Software engineer
*/

//Using `Array.forEach()` loop
// ***************************

//create an array
const scores = [11, 22, 33, 44, 55, 66, 77, 88, 99];

//iterating scores using forEach method
scores.forEach((score) => console.log(`score :${score}`));
/*
score :11
score :22
score :33
score :44
score :55
score :66
score :77
score :88
score :99
*/

//Using `Array.map()` method
// ***************************
let mapped = scores.map((score) => score / 11);
console.log(mapped); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(Array.isArray(mapped)); //true;

//Using `Array.filter()` Method
// *****************************

let lessThan50 = scores.filter((score) => score < 50);
console.log(lessThan50); //[11, 22, 33, 44]
console.log(Array.isArray(lessThan50)); //true;

//Using `Array.reduce()` method
// *****************************

let total_score = scores.reduce((total, prev) => {
  return (total += prev);
}, 0);

console.log(total_score); //495
