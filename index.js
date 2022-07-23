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
let k = 0;
let myString = '';

do {
  let item = arr1[k];
  myString += item;
  ++k;
} while (k < arr1.length);

console.log(myString);
