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

